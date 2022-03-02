import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Props } from "framer-motion/types/types"
import ImageSelector from "./imageSelect"
import ProbDisplay from "./probDisplay"

const classList = [
    'Cats',
    'Dogs'
]


export default function Predictor(props: Props) {
    const [data, setData] = useState({
        img_name: "",
        prob: [0.0, 0.0]
    })

    const onChangeData = async (img: File) => {
        const body = new FormData()
        body.append("img", img, img.name)
        fetch(
            '/api/predict',
            {
                method: "POST",
                body
            }
        ).then(
            (res) => res.json()
        ).then(
            (_data) => setData(
                {
                    img_name: _data.name,
                    prob: _data.prob
                }
            )
        )
    }

    return (
        <motion.div
            style={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'stretch',
            }}>
            <ImageSelector data={data} setData={onChangeData} />
            <ProbDisplay classList={classList} probList={data.prob}/>
        </motion.div>
    )
}