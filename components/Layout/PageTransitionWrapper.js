import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 200 },
};

export default function PageTransitionWrapper(props) {
  const { children } = props;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
