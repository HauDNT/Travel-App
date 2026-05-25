import { motion } from "framer-motion"
import { ReactNode } from "react"

type FramerMotionProps = {
  children: ReactNode
}

const FramerMotion = ({ children }: FramerMotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}                 // Trạng thái ban đầu: Ẩn và đẩy xuống 50px
      whileInView={{ opacity: 1, y: 0 }}              // Trạng thái khi cuộn tới: Hiện rõ và về vị trí cũ
      viewport={{ once: true, amount: 0.2 }}          // once: true giúp hiệu ứng chỉ chạy 1 lần duy nhất
      transition={{ duration: 0.8, ease: "easeOut" }} // Chuyển động trong 0.6 giây
    >
      {children}
    </motion.div>
  )
}

export default FramerMotion