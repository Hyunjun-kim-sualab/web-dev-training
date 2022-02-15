import type { NextPage } from 'next'
import { motion } from "framer-motion"
import LinkButton from "./linkButton"

const Home: NextPage = () => {
    return (
        <motion.div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: 'space-between',
            }}
        >
            <motion.h1 style={{
                margin: "2%"
            }}>
                CLassification
                <br />
                APplication
            </motion.h1>
            <motion.div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <LinkButton name="Labeling"/>
                <LinkButton name="Predict"/>
            </motion.div>
        </motion.div>
    )
}

export default Home