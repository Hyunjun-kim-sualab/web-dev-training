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
export default function Class(props: Props) {
    const { tint, style, className } = props

    const [active, setActive] = useState(false)

    return (
        <motion.div style={{ ...style, ...containerStyle }}>
            <motion.div
                onTap={() => setActive(!active)}
                style={{
                    // margin: 50,
                    padding: "5% 10% 5% 10%",
                    borderRadius: 20,
                    backgroundColor: tint,
                }}
            >
                <motion.h2 style={{ color: "white" }}> {className} </motion.h2>
            </motion.div>
        </motion.div>
    )
}

Class.defaultProps = {
    tint: "#09F",
    className: "Class",
}

// addPropertyControls(Class, {
//     tint: {
//         title: "Tint",
//         type: ControlType.Color,
//     },
// })

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // overflow: "hidden",
}
