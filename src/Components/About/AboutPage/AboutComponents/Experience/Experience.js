import React from 'react'
import './Experience.css'
import {motion} from 'framer-motion'

const Experience = () => {
  return (
    <div className='experience__container'>
      <motion.h2
      initial={{opacity:0, y:'-10px'}}
      animate={{opacity:1, y:0, transition:{
          ease:'easeOut',
          duration:1
      }}}
      >Experience</motion.h2>
      <div className='experience Aoniken'>
        <motion.p className='experience-place'
        initial={{opacity:0}}
        animate={{opacity:1, transition:{
            ease:'linear',
            duration:1,
            delay:.5
        }}}><a className='place' href='https://www.grupoaoniken.com.ar/' target='_blank' rel="noreferrer">Aoniken</a> - Consultor DataBase</motion.p>
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{
            ease:'linear',
            duration:1,
            delay:1.2
        }}} className='experience-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint accusantium tenetur mollitia commodi fugiat at est earum dignissimos nesciunt, asperiores excepturi, harum repellendus nisi dolorem nihil, culpa dolores quis nobis exercitationem non error id modi corrupti? Ab quidem incidunt voluptas nihil ratione iure pariatur</motion.p>
      </div>
      <div className='experience'>
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{
            ease:'linear',
            duration:1,
            delay:1
        }}}
        className='experience-place'><a className='place' href='https://www.bernardolew.com.ar/' target='_blank' rel="noreferrer">Bernardo Lew</a> - Frontend Developer</motion.p>
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{
            ease:'linear',
            duration:1.5,
            delay:1.6
        }}}
        className='experience-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint accusantium tenetur mollitia commodi fugiat at est earum dignissimos nesciunt, asperiores excepturi, harum repellendus nisi dolorem nihil, culpa dolores quis nobis exercitationem non error id modi corrupti? Ab quidem incidunt voluptas nihil ratione iure pariatur</motion.p>
      </div>
    </div>
  )
}

export default Experience