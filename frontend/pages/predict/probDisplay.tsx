import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Props } from "framer-motion/types/types"
import ProbGraph from "./graph"


export default function ProbDisplay(props: Props) {
    const { classList, probList } = props

    const maxIdx = probList.reduce((maxIdx: number, x: number, i: number, arr: Array<number>) => x > arr[maxIdx] ? i : maxIdx, 0)

    return (
        <motion.div
            style={{
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'stretch',
                // padding: 10,
                height: "110%",
                // gridTemplateColumns: `repeat(${probList.length}, 1fr)`,
                width: `${probList.length * 10}vh`,
                // overflow: 'hidden',
            }}>
            {probList.map((prob: number, index: number) => <ProbGraph prob={prob} className={classList[index]} isMain={index === maxIdx} style={GraphStyle}/>)}
        </motion.div>
    )
}

const GraphStyle = {
    marginLeft: "10%",
    marginRight: "10%",
    // width: "20%",
    // minWidth: "max-content"
}