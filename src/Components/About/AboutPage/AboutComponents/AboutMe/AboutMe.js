import React from 'react'
import './AboutMe.css'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <div className='title-about-me__container'>
      <div className='nombre'>
        <motion.h2 className='isaias_mella'
        initial={{opacity:0, y:'-30px'}}
        animate={{opacity:1, y:0, transition:{
            ease:'easeOut',
            duration:1.5
        }}}
        >Isaias Mella</motion.h2>
      </div>
      <motion.h3
      initial={{opacity:0, y:'-15px'}}
      animate={{opacity:1, y:0, transition:{
          ease:'easeOut',
          duration:1
      }}}
      >FRONTEND DEVELOPER</motion.h3>
      <div className='text__container'>
        <motion.p
        initial={{opacity:0}}
        animate={{opacity:1, transition:{
            ease:'easeInOut',
            duration:1,
            
        }}}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae a, debitis ratione quam esse dolorem quasi,
          aspernatur, placeat hic labore quidem? Et error ipsam aliquid earum laboriosam cupiditate expedita!
          Voluptatum, deserunt accusamus sint minus quos necessitatibus hic ut atque nam animi est, asperiores ad obcaecati nulla
        </motion.p>

      </div>
    </div>
  )
}

export default AboutMe