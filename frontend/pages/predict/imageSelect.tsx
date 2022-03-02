import { ChangeEvent, useState } from "react"
import { motion } from "framer-motion"
import { Props } from "framer-motion/types/types"

export default function ImageSelector(props: Props) {
    const { data, setData, style } = props

    const [objectURL, setObjectURL] = useState("")

    const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0]

            setData(img)
            setObjectURL(URL.createObjectURL(img))
        }
    }

    return (
        <motion.div
            style={{
                display: "flex",
                flexDirection: 'column-reverse',
                justifyContent: 'space-around',
                alignItems: 'stretch',
                ...style
            }}>
            <motion.img src={objectURL} style={{
                maxHeight: "60vh",
                minHeight: "30vh"
            }} />
            <motion.label
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
                for='file_img'
            >
                <motion.h3 style={{
                    margin: "1%",
                    padding: "0% 2% 0% 2%",
                    borderRadius: 10,
                    backgroundColor: "#09F",
                    alignSelf: 'center',
                    color: 'white'
                }}>Select</motion.h3>
                <motion.h3>{data.img_name}</motion.h3>
            </motion.label>
            <motion.input type='file' name='Image' onChange={uploadToClient} hidden id='file_img'/>
        </motion.div>
    )
}