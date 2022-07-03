import React from 'react'
import './Button.css'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'


const Button = ({ text, to = '#', offset = null , variant = '', initial = '', animate = '' }) => {

    return (
        <motion.div
            variants={variant}
            initial={initial}
            animate={animate}>
            <Link
                className='button'
                as='button'
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                duration={1100}
            >{text}</Link>
        </motion.div>
    )
}

export default Button