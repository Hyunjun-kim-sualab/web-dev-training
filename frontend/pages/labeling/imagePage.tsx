import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Props } from "framer-motion/types/types"
import ImageData from "./imageData"


const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }
    },
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            x: direction < 0 ? 100 : -100,
            scale: 0,
            opacity: 0
        }
    }
}


const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}


export default function ImagePage(props: Props) {
    const { imgList, pos, setPos } = props

    const [direction, setPage] = useState(0)


    const paginate = (newDirection: number) => {
        setPage(newDirection)
        const newPos = Math.min(Math.max(pos + newDirection, 0), imgList.length)
        setPos(newPos)
    }

    return (
        <motion.div
            style={{
                width: "60%",
                height: "50%",
                overflow: 'hidden'
            }}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <motion.div
                        key={pos}
                        className="imagePage"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        custom={direction}
                        drag="x"
                        dragDirectionLock
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x)

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1)
                            }
                            else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1)
                            }
                        }}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        dragElastic={1}
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: {duration: 0.2}
                        }}
                    >
                        {imgList[pos].id !== 0? <ImageData
                            classList={["Dogs", "Cats"]}
                            img_id={imgList[pos].id}
                            key={pos}
                        /> : null}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}