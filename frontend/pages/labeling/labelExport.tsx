import { useState } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"
import { Props } from "framer-motion/types/types"
import { fileSave } from "browser-fs-access"

// Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Download(props: Props) {
    const { style, imgList } = props

    const downloadData = async (imgList: Array<{ id: number, name: string, class_name: string }>) => {
        const imgToSave = imgList.filter((img, idx, arr) => {
            return img.class_name !== null
        }).map((img, idx, arr) => JSON.stringify(img))
        await fileSave(new Blob(imgToSave), {fileName: 'labels.json', extensions: ['.json']})
    }

    return (
        <motion.div
            onTap={() => downloadData(imgList)}
            style={{
                marginLeft: "1%",
                marginRight: "1%",
                padding: "0% 2% 0% 2%",
                borderRadius: 10,
                backgroundColor: "#09F",
            }}
            whileHover={{
                scale: 1.1
            }}
        >
            <motion.h3 style={{ color: "white" }}> Download </motion.h3>
        </motion.div>
    )
}

const containerStyle = {
    minHeight: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
}
