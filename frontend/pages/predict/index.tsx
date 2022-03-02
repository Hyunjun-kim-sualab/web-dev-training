import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Stack } from "framer"
import { Props } from "framer-motion/types/types"
import { useRouter } from "next/router"
import Predictor from "./predictor"


export default function Predict(props: Props) {
    const { tint, style } = props
    const route = useRouter()

    return (
        <motion.div
            style={{
                width: "100%",
                height: "100%",
                // margin: 50,
                padding: 50,
                borderRadius: 0,
                backgroundColor: tint,
                ...containerStyle,
            }}>
            <Stack
                style={{
                    width: "100%",
                    height: "100%"
                }}
                direction="vertical">
                <motion.h1>Predict</motion.h1>
                <motion.div
                    whileHover={{
                        scale: 1.1
                    }}
                    style={{
                        marginLeft: "1%",
                        marginRight: "1%",
                        padding: "0% 2% 0% 2%",
                        borderRadius: 10,
                        backgroundColor: "#09F",
                    }}
                    onTap={() => {
                        route.back()
                    }}
                >
                    <motion.h3 style={{ color: "white" }}> Back </motion.h3>
                </motion.div>
                <Predictor />
            </Stack>
        </motion.div>
    )
}

Predict.defaultProps = {
    tint: "#ffffff",
}

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
}
