'use client'

import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex items-center justify-center'
    >
      <div>PT Ratu Bio Indonesia</div>
    </motion.div>
  );
}