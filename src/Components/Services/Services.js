import React from 'react'
import './Services.css'
import rocket from '../../Video/rocket.gif'
import Pen from '../../Video/clean.gif'
import { motion } from 'framer-motion'

const iconVariants = {
    hidden: {
        y: "50px",
        opacity: 0
    },
    show: {
        y: "0",
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 3,
            delay: 1
        }
    }
}

const svgVariants = {
    hidden: {
        transform: "rotate(-5deg)"
        // x:"8px",
    },
    show: {
        transform: "rotate(5deg)",
        // x:"0",
        transition: {
            //     transform:"rotate(15deg)"
            duration: .2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
}

const Services = () => {
    return (
        <div

            className='services__container'>
            <div className='services'>
                <motion.div className='services-icon'
                    variants={iconVariants}
                    initial="hidden"
                    animate="show">
                    <img src={Pen} border="0" id="imagen1" alt='CleanDesign' />
                </motion.div>
                <motion.h2
                    variants={iconVariants}
                    initial="hidden"
                    animate={{y: "0",
                    opacity: 1,
                    transition: {
                        ease: "easeOut",
                        duration: 3,
                        delay: 1.5
                    }}}
                >CLEAN DESIGN</motion.h2>
                <motion.p
                variants={iconVariants}
                initial="hidden"
                animate={{y: "0",
                opacity: 1,
                transition: {
                    ease: "easeOut",
                    duration: 3,
                    delay: 2
                }}}
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dignissimos deleniti nostrum harum maiores sint
                </motion.p>
            </div>
            <div className='services'>
                <motion.div className='services-icon'
                variants={iconVariants}
                initial="hidden"
                animate={{
                        y: "0",
                        opacity: 1,
                        transition: {
                            ease: "easeOut",
                            duration: 3,
                            delay: 1.2
                }}}>
                    <img src={rocket} width="68" height="68" border="0" id="imagen1" alt='NewTechnology' />
                </motion.div>
                <motion.h2 
                variants={iconVariants}
                initial="hidden"
                animate={{y: "0",
                opacity: 1,
                transition: {
                    ease: "easeOut",
                    duration: 3,
                    delay: 1.7
                }}}>NEW TECHNOLOGY</motion.h2>
                <motion.p
                variants={iconVariants}
                initial="hidden"
                animate={{y: "0",
                opacity: 1,
                transition: {
                    ease: "easeOut",
                    duration: 3,
                    delay: 2.2
                }}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dignissimos deleniti nostrum harum maiores sint
                </motion.p>
            </div>
            <div className='services'>
                <motion.div className='services-icon'
                variants={iconVariants}
                initial="hidden"
                animate={{
                    y: "0",
                    opacity: 1,
                    transition: {
                        ease: "easeOut",
                        duration: 3,
                        delay: 1.5
            }}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" className="icons icon-tabler icon-tabler-devices" width="60" height="60" viewBox="0 0 22 22" strokeWidth="1" stroke="#000" fill="none">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <motion.rect
                            variants={svgVariants}
                            initial="hidden"
                            animate="show"
                            x="13" y="8" width="8" height="12" rx="1" />
                        <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                        <motion.line
                            initial={{ x: "-0.5px", }}
                            animate={{
                                x: "0.5px",
                                transition: {
                                    duration: .2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    interval: "5",
                                    repeatType: "reverse"
                                }
                            }}
                            x1="16" y1="9" x2="18" y2="9" />
                    </svg>
                </motion.div>

                <motion.h2 
                variants={iconVariants}
                initial="hidden"
                animate={{y: "0",
                opacity: 1,
                transition: {
                    ease: "easeOut",
                    duration: 3,
                    delay: 1.8
                }}}>RESPONSIVE LAYOUT</motion.h2>
                <motion.p
                variants={iconVariants}
                initial="hidden"
                animate={{y: "0",
                opacity: 1,
                transition: {
                    ease: "easeOut",
                    duration: 3,
                    delay: 2.5
                }}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dignissimos deleniti nostrum harum maiores sint
                </motion.p>
            </div>
        </div>
    )
}

export default Services