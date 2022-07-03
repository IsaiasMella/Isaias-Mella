import React from 'react'
import './Info.css'
import { motion } from 'framer-motion'

const Info = () => {
    return (
        <div className='Info__container'>
            <div className='Info'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.5, delay: 1 }}}
                >Let's work together and create something unique</motion.h1>
            </div>
        </div>
    )
}

export default Info