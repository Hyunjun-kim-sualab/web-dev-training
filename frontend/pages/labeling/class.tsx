import { useState } from "react"
import { motion } from "framer-motion"
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
export default function ClassList(props: Props) {
    const { style, classList, currentClass, setClass } = props

    return (
        <motion.div style={{ ...style, ...containerStyle }}>
            {classList.map((className: string) => rowRenderer(className, buttonStyle, setClass, currentClass==className))}
        </motion.div>
    )
}

ClassList.defaultProps = {
    tint: "#09F",
    className: "Class",
}

const rowRenderer = (className: string, style: object, handler: Function, isActive: boolean) => (
    <motion.div
        onTap={() => handler(className)}
        style={{
            ...style,
            backgroundColor: isActive? "#0f9": "#09f"
        }}
        whileHover={{
            scale: 1.1
        }}
    >
        <motion.h2 style={{ color: "white" }}> {className} </motion.h2>
    </motion.div>
)

const containerStyle = {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "60%",
    // overflow: "hidden",
}

const buttonStyle = {
    // margin: 50,
    padding: "1% 10% 1% 10%",
    borderRadius: 20,
    backgroundColor: "#09f",
}
