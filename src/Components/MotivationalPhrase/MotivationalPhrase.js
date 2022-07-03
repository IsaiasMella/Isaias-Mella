import React from 'react'
import './MotivationalPhrase.css'
import { motion } from 'framer-motion'

const MotivationalPhrase = () => {
  return (
    <div className='Motive__container'>
      <div className='Motive'>
        <motion.h2
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:1.5, delay:1}}}
        >" Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do "</motion.h2>
        <motion.p
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:1.5, delay:2}}}
        >Steve Jobs</motion.p>
      </div>
    </div>
  )
}

export default MotivationalPhrase
