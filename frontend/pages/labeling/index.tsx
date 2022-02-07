import { useState } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType, Stack, Page } from "framer"
import Download from "./labelExport"
import ImageData from "./imageData"
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
export default function Labeling(props: Props) {
    const { tint, style } = props

    const [active, setActive] = useState(false)

    return (
        // <motion.div style={{ ...style, ...containerStyle }}>
        <motion.div
            style={{
                width: "100%",
                height: "100%",
                // margin: 50,
                padding: 50,
                borderRadius: 0,
                backgroundColor: tint,
                ...containerStyle,
            }}
        >
            <Stack
                style={{
                    width: "100%",
                }}
                direction="vertical"
                // distribution="space-around"
            >
                <motion.h2>Labeling</motion.h2>
                <Download />
                <Page
                    children={dummyClass.map((data) => (
                        <ImageData
                            classList={data.class_list}
                            img_path={data.img_path}
                        />
                    ))}
                    style={{
                        width: "60%",
                        height: "100%"
                    }}
                />
            </Stack>
        </motion.div>
        // </motion.div>
    )
}

Labeling.defaultProps = {
    tint: "#ffffff",
}

// addPropertyControls(Labeling, {
//     tint: {
//         title: "Tint",
//         type: ControlType.Color,
//     },
// })

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    overflow: "hidden",
}

const dummyClass = [
    {
        img_path: "http://placekitten.com/g/64/64",
        class_list: ["Dogs", "Cats"],
    },
]
