import { useEffect, useState } from "react"
import { motion, motionValue, useMotionValue } from "framer-motion"
import { Props } from "framer-motion/types/types"



export default function ProbGraph(props: Props) {
    const { prob, className, isMain, style } = props

    const [hover, setHover] = useState(false)

    const y = motionValue(0)

    return (
        <motion.div
            style={{
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: 'center',
                // alignItems: 'center',
                // width: '10%',
                // overflow: 'auto',
                width: 'min-content',
                ...style,
            }}
        >
            <motion.div
                style={{
                    height: `120%`,
                    width: "min-content",
                    // backgroundColor: isMain ? "#0f9" : "#09f",
                    display: "flex",
                    flexDirection: "column-reverse",
                    border: 2,
                    borderColor: 'black'
                }}>
                    <motion.h3
                        style={{
                        height: "10%",
                            margin: 0,
                    }}>
                    {className}
                </motion.h3>
                <motion.div
                    style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column-reverse'
                    }}
                >
                <motion.div
                    style={{
                        height: `${prob*90}%`,
                        backgroundColor: isMain ? "#0f9" : "#09f",
                    }}
                    onHoverStart={(e) => {
                        setHover(true)
                    }}
                    onHoverEnd={(e) => {
                        setHover(false)
                    }}
                    onMouseMove={(e) => {
                        y.set(e.clientY - e.currentTarget.getBoundingClientRect().top)
                    }}
                >
                {hover && (
                    <motion.div
                        style={{
                            // float: 'left',
                            y,
                            height: "120%",
                            width: "0%",
                            overflowX: 'visible',
                            position: 'absolute',
                            marginTop: "-4vh",
                        }}>
                        <motion.h5>{prob}</motion.h5>
                    </motion.div>
                )}
                </motion.div></motion.div>
                {/* <motion.div
                    style={{
                        height: `5%`,
                }}>
                </motion.div> */}
            </motion.div>
        </motion.div>
    )
}