import React, { useState, useEffect } from 'react'
import './Cover.css'
import Fondo from '../../Video/Cover.jpg'
import Button from '../Component/Buttons/Button'
import Services from '../Services/Services';
import About from '../About/About'
import MotivationalPhrase from '../MotivationalPhrase/MotivationalPhrase';
import Carrousel from '../Carrousel/Carrousel'
import Info from '../Info/Info'
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion'


const textVariants = {
    hidden: {
        y: "80px",
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 1.2,
            delay: .5
        }
    }
}

const aVariantLeft = {
    hidden: {
        x: "-50px",
        opacity: 0
    },
    show: {
        x: "0",
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 1,
            delay: 1.2
        }
    }
}

const aVariantRight = {
    hidden: {
        x: "50px",
        opacity: 0
    },
    show: {
        x: "0",
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 1,
            delay: 1.2
        }
    }
}


const Cover = () => {
    const [widthPantallaCover, setWidthPantallaCover] = useState(window.innerWidth);

    function escucharTamañoCover() {
        setWidthPantallaCover(window.innerWidth)
    }
    
    useEffect(() => {
        window.addEventListener('resize', escucharTamañoCover)
        return () => {
            window.removeEventListener('resize', escucharTamañoCover)
        };
    });

    return (
        <>
            <motion.div className='cover-container'>
                <motion.img className='fondo' src={Fondo} alt='Coffe'
                    initial={{ x: "-25px", opacity: 0 }}
                    animate={{ x: "0px", opacity: 1, transition: { ease: "easeInOut", duration: 1 } }}
                />
                <div className='title__container'>
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="show"
                    >FRONTEND DEVELOPER</motion.p>
                    <motion.h1
                        variants={textVariants}
                        initial="hidden"
                        animate="show"
                    >ISAIAS MELLA</motion.h1>
                    <div className='buttons'>
                        <Button text='ABOUT'
                            to='about'
                            offset={widthPantallaCover < 900 ? -70 : -95}
                            variant={aVariantLeft}
                            initial={"hidden"}
                            animate={"show"}
                        />
                        <motion.p
                            variants={textVariants}
                            initial="hidden"
                            animate="show"
                        >or</motion.p>
                        <Button text='PROJECTS'
                            to='projects'
                            offset={widthPantallaCover < 900 ? -60 : -70}
                            variant={aVariantRight}
                            initial={"hidden"}
                            animate={"show"} />
                    </div>
                </div>
            </motion.div>
            <Services />
            <About />
            <MotivationalPhrase />
            <Carrousel />
            <Info />
            <Footer />
        </>
    )
}

export default Cover