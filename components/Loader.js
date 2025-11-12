import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5 }}
            className="origin-left bg-sky-600 h-1 rounded-full shadow-md"
            style={{ width: 240 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
