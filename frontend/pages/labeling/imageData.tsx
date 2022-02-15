import { useState } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"
import ImageDisplay from "./imageDisplay"
import Class from "./class"
import { Props } from "framer-motion/types/types"

// Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function ImageData(props: Props) {
    const { style, img_id } = props

    return (
        <motion.div style={{ ...style, ...containerStyle }} className='imageData'>
           <ImageDisplay img_path={'/image/' + img_id} />
        </motion.div>
    )
}

const containerStyle = {
    width: "100%",
    height: "100%",
    minWidth: 300,
    mihHeight: 300,
    // display: "flex",
    flex: "1 0 100%"
    // "flex-direction": "column-wise",
    // justifyContent: "space-around",
    // alignItems: "center",
    // alignContents: 'center'
    // overflow: "hidden",
}
