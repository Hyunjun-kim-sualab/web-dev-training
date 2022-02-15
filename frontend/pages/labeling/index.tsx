import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { motion, MotionConfig } from "framer-motion"
import { Stack, Page } from "framer"
import Download from "./labelExport"
import ImageData from "./imageData"
import { Props } from "framer-motion/types/types"
import { useRouter } from "next/router"
import InfiniteLoader from "react-window-infinite-loader"
import ClassList from "./class"
import ImagePage from "./imagePage"
import ImageDropdown from "./imageList"

// Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/

function shuffle(arr: Array<any>) {
    for (var i = arr.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1)) as number
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}
/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Labeling(props: Props) {
    const { tint, style } = props
    const route = useRouter()

    const init_data = [
        {
            id: 0,
            class_name: '',
            name: ''
        }
    ]

    const [dataList, setDataList] = useState(init_data)

    useEffect(() => {
        fetch(
            '/api/images'
        ).then(
            (res) => res.json()
        ).then(
            (data) => {
                shuffle(data)
                setDataList(data)
            }
        )
    }, []
    )

    const [cursor, setCursor] = useState(0)

    return (
        <motion.div
            style={{
                width: "100%",
                height: "100%",
                // margin: 50,
                padding: 50,
                borderRadius: 0,
                backgroundColor: tint,
                ...containerStyle,
            }}
        >
            <Stack
                style={{
                    width: "100%",
                    height: "100%"
                }}
                direction="vertical"
            >
                <motion.h1>Labeling</motion.h1>
                <motion.div
                    style={{
                        width: "60%",
                        display: 'flex',
                        flexFlow: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Download imgList={dataList}/>
                    <motion.div
                        whileHover={{
                            scale: 1.1
                        }}
                        style={{
                            marginLeft: "1%",
                            marginRight: "1%",
                            padding: "0% 2% 0% 2%",
                            borderRadius: 10,
                            backgroundColor: "#09F",
                        }}
                        onTap={() => {
                            route.back()
                        }}
                    >
                        <motion.h3 style={{ color: "white" }}> Back </motion.h3>
                    </motion.div>
                </motion.div>
                {/* <ImageDropdown imgList={dataList} pos={cursor} setPos={(value: number) => setCursor(value)}/> */}
                <motion.h2>{dataList[cursor].name}</motion.h2>
                <ImagePage
                    imgList={dataList}
                    pos={cursor}
                    setPos={(value: number) => setCursor(value)}
                />
                <ClassList classList={['Cats', 'Dogs']}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: 'space-around',
                        width: "60%",
                        alignItems: 'stretch'
                    }}
                    currentClass={dataList[cursor].class_name}
                    setClass={async (className: string) => {
                        const newData = {...dataList[cursor], class_name: className}
                        const updated = await fetch('/api/image', {
                            headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json',
                            },
                            method: 'POST',
                            body: JSON.stringify(newData),
                          }).then(res => res.json())
                        setDataList(
                            dataList.map((data, index, array) =>
                                index == cursor ? updated : data)
                        )
                    }}
                />
            </Stack>
        </motion.div>
    )
}

Labeling.defaultProps = {
    tint: "#ffffff",
}

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
}
