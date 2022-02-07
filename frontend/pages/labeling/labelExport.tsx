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
export default function Download(props: Props) {
    const { style } = props

    const [active, setActive] = useState(false)

    return (
        <motion.div style={{ ...style, ...containerStyle }}>
            <motion.div
                onTap={() => setActive(!active)}
                style={{
                    margin: 50,
                    padding: "0% 5% 0% 5%",
                    borderRadius: 10,
                    backgroundColor: "#09F",
                }}
            >
                <motion.h3 style={{ color: "white" }}> Download </motion.h3>
            </motion.div>
        </motion.div>
    )
}

const containerStyle = {
    "min-height": 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
}
