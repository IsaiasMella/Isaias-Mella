import React, { useState, useEffect } from 'react'
import './Footer.css'
import Fondo from '../../Video/Cover.jpg'
import { motion } from 'framer-motion'
import { Link as LinkR } from 'react-router-dom'
import FormContact from '../Component/FormContact/FormContact'



const textVariant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            esae: "easeInOut",
            duration: .5,
            delay: 1.5
        }
    }
}

const Footer = () => {
    const [widthPantalla, setWidthPantalla] = useState(window.innerWidth);

    function escucharTamaño() {
        setWidthPantalla(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', escucharTamaño)
        return () => {
            window.removeEventListener('resize', escucharTamaño)
        };
    });

    return (
        <div
            className='footer__container'
            id='contact'>
            <motion.img
                className='fondo-footer'
                src={Fondo}
                alt='Coffe'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { esae: "easeInOut", duration: 1 } }}
            />
            <div className='container'>
                <div className='footer__info'>
                    <div className='footer__name-isaias'>
                        <motion.h1
                            initial={{ x: "-50px", opacity: 0 }}
                            animate={{ x: "0px", opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: .5 } }}
                        >Isaias Mella</motion.h1>
                    </div>
                    <motion.a href='https://www.google.com.ar/maps/place/Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.7148006,-62.3157673,12z/data=!4m5!3m4!1s0x95edbcabdc1302bd:0x76d1d88d241e7a11!8m2!3d-38.7183177!4d-62.2663478' target='_blank'
                        variants={textVariant}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1, transition: {
                                esae: "easeInOut", duration: .5, delay: 1
                            }
                        }}
                    >Bahía Blanca, Argentina</motion.a>
                    <motion.div className='footer__contact'
                        variants={textVariant}
                        initial="hidden"
                        animate="show"
                    >
                        <h3>Contact me</h3>
                        <p>And let's get down to work</p>
                    </motion.div>
                    {widthPantalla <= 900 ? <FormContact /> : null}
                    <div className='footer__sns'>
                        <div className='sns-links linkedin'>
                            <motion.a className='sns-icon' href='https://www.linkedin.com/in/isaias-mella/' target="_blank" rel="noreferrer"
                                initial={{ x: "-50px", opacity: 0 }}
                                animate={{ x: "0px", opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: 1.5 } }}
                            >
                                <i className='fab fa-linkedin linkedin'></i>
                            </motion.a>
                            <motion.a className='sns-icon github' href='https://github.com/IsaiasMella' target="_blank" rel="noreferrer"
                                initial={{opacity: 0 }}
                                animate={{opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: 1.5 } }}
                            >
                                <i className='fab fa-github github'></i>
                            </motion.a>
                            <LinkR to='/about/contact' >
                                <motion.svg
                                    className='sns-icon gmail'
                                    initial={{ x: "50px", opacity: 0 }}
                                    animate={{ x: "0px", opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: 1.5 } }}
                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="35" height="50"
                                    viewBox="0 0 50 50">
                                    <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path></motion.svg>
                            </LinkR>
                        </div>
                    </div>
                    <motion.div className='design__by'
                        variants={textVariant}
                        initial="hidden"
                        animate="show"
                    >
                        Desing By Isaias Mella
                    </motion.div>
                </div>
                {widthPantalla > 900 ? <FormContact /> : null}
            </div>
        </div >
    )
}

export default Footer