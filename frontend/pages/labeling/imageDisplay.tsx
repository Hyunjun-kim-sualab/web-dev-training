import { useState } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"
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
export default function ImageDisplay(props: Props) {
    const { img_path } = props

    // const [active, setActive] = useState(false)

    return (
        <motion.div style={{
            ...containerStyle
        }}>
            <motion.img src={img_path} />
        </motion.div>
    )
}

ImageDisplay.defaultProps = {
    img_path: "http://placekitten.com/g/64/64",
}

// addPropertyControls(ImageDisplay, {
//     img_path: {
//         title: "Image",
//         type: ControlType.Image,
//     },
// })

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
