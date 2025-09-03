'use client'

import { motion } from 'framer-motion'
import { useState } from 'react';

export default function SplashScreen() {
  const [hidden, setHidden] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      onAnimationComplete={() => setHidden(true)}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-50 items-center justify-center ${hidden ? 'hidden' : 'flex'}`}
    >
      <img src="logo/ratu-bio-logo.webp" alt="" className='h-24' />
    </motion.div>
  );
}