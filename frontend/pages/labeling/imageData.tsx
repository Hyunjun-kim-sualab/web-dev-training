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
    const { style, classList, img_path } = props

    const [active, setActive] = useState(false)

    return (
        <motion.div style={{ ...style, ...containerStyle }}>
            <ImageDisplay img_path={img_path} />
            <motion.div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-around'
                }}
            >
                {classList.map((className: string) => (
                    <Class className={className} />
                ))}
            </motion.div>
        </motion.div>
    )
}

ImageData.defaultProps = {
    classList: ["Dogs", "Cats"],
}

const containerStyle = {
    width: "100%",
    height: "100%",
    "min-width": 300,
    "min-height": 300,
    // display: "flex",
    // "flex-direction": "column-wise",
    justifyContent: "space-around",
    alignItems: "center",
    alignContents: 'center'
    // overflow: "hidden",
}
