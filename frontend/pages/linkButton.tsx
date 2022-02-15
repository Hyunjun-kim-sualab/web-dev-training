import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import { Props } from "framer-motion/types/types"


export default function LinkButton(props: Props) {
    const { name } = props
    const router = useRouter()

    const handleTap = (e: Event) => {
        e.preventDefault()
        router.push('/' + name.toString().toLowerCase())
    }

    return (
        <motion.div
            // onTap={() => setActive(!active)}
            whileHover={{
                scale: 1.1
            }}
            style={{
                margin: "2%",
                padding: "1% 5% 1% 5%",
                borderRadius: 20,
                backgroundColor: "#09F",
            }}
            onTap={handleTap}
        >
            <motion.h2 style={{ color: "white" }}> {name} </motion.h2>
        </motion.div>
    )
}