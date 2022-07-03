import React from 'react'
import './Technology-Frontend.css'
import HTML from '../../../../Video/HTML.png'
import CSS from '../../../../Video/CSS.png'
import JS from '../../../../Video/JS.png'
import ReactJs from '../../../../Video/React-icon.png'
import Next from '../../../../Video/next.png'
import ReactR from '../../../../Video/react-router.png'
import Redux from '../../../../Video/redux.png'
import Sass from '../../../../Video/sass.png'
import FramerM from '../../../../Video/framer-motion.png'
import { motion } from 'framer-motion'

const reactVariant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1
        }
    }
}

const primeraFilaVariant = {
    hidden: {
        y: '-20px',
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1,
            delay: .5
        }
    }
}

const segundaFilaVariant = {
    hidden: {
        y: '-20px',
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1,
            delay: 1
        }
    }
}

const TechnologyFrontend = () => {
    return (
        <div className='logo__container'>
            <motion.div
                variants={reactVariant}
                initial='hidden'
                animate='show'
                className='logo__react'>
                <a href='https://reactjs.org/' target='_blank' rel="noreferrer">
                    <motion.img className='reactL' src={ReactJs} alt='React'
                        animate={{
                            rotate: 180,
                            transition: {
                                ease: 'linear',
                                repeat: Infinity,
                                duration: 3
                            }
                        }}
                    />
                </a>
            </motion.div>
            <motion.div
                variants={primeraFilaVariant}
                initial='hidden'
                animate='show'
                className='primera__fila-frontend'>
                <div>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_black' rel="noreferrer">
                        <img className='logo html' src={HTML} alt='HTML' />
                    </a>
                </div>
                <div>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_black' rel="noreferrer">
                        <img className='logo css' src={CSS} alt='CSS' />
                    </a>
                </div>
                <div>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_black' rel="noreferrer">
                        <img className='logo' src={JS} alt='JS' />
                    </a>
                </div>
            </motion.div>
            <motion.div
                variants={segundaFilaVariant}
                initial='hidden'
                animate='show'
                className='segunda__fila-frontend'>
                <div>
                    <a href='https://nextjs.org/' target='_black'rel="noreferrer">
                        <img className='logo' src={Next} alt='NextJs' />
                    </a>
                </div>
                <div>
                    <a href='https://reactrouter.com/' target='_black' rel="noreferrer">
                        <img className='logo' src={ReactR} alt='React-Router' />
                    </a>
                </div>
                <div>
                    <a href='https://redux.js.org/' target='_black' rel="noreferrer">
                        <img className='logo' src={Redux} alt='Redux' />
                    </a>
                </div>
                <div>
                    <a href='https://sass-lang.com/' target='_black' rel="noreferrer">
                        <img className='logo' src={Sass} alt='Sass' />
                    </a>
                </div>
                <div>
                    <a href='https://www.framer.com/motion/' target='_black' rel="noreferrer">
                        <img className='logo' src={FramerM} alt='Framer-Motion' />
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default TechnologyFrontend