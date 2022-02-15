import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Props } from "framer-motion/types/types"
import { Scroll } from "framer"


export default function ImageDropdown(props: Props) {
    const { imgList, pos, setPos } = props

    const [isFocused, setFocus] = useState(false)

    return (
        isFocused ?
            <Scroll height={100} width={100} dragEnabled wheelEnabled direction='vertical' onBlur={() => console.log('Blur')}>
                {imgList.slice(0, 10).map((img: {id: number, name: string, class_name: string}, idx: number, arr: Array<any>) => (
                    <motion.h3 onTap={() => {
                        setPos(idx)
                        setFocus(false)
                    }}
                        key={idx}
                        style={{
                            backgroundColor: img.class_name !== null ? "#0f9" : "#fff"
                        }}
                    >{idx+1}:{img.name}</motion.h3>
                ))}
            </Scroll>
            :
            <motion.h2 onTap={() => setFocus(true)}>
                {imgList[pos].name}
            </motion.h2>
    )
}