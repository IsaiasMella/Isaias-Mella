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
        }}}><a className='place' href='https://www.grupoaoniken.com.ar/' target='_blank' rel="noreferrer">Aoniken S.R.L</a> - Database Consultant</motion.p>
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{
            ease:'linear',
            duration:1,
            delay:1.2
        }}} className='experience-text'>My job was to make queries in the database for the facilitation of customer's decision making and/or to edit the databases for any administrative errors or bad loading by the clients.
        and/or edit the databases for any clerical errors or employee misloading that may have occurred.
        (I was using SQLServer).</motion.p>
      </div>
      <div className='experience'>
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{
            ease:'linear',
            duration:1,
            delay:1
        }}}
        className='experience-place'><a className='place' href='https://www.bernardolew.com.ar/' target='_blank' rel="noreferrer">Bernardo Lew e Hijos S.R.L</a> - Frontend Developer</motion.p>
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{
            ease:'linear',
            duration:1.5,
            delay:1.6
        }}}
        className='experience-text'>My task is to develop different programs that facilitate the use, control or management of tasks in the company.
        These projects are developed in JavaScript with the React library for the frontend, HTML5, CSS3 and
        Electron for the development of desktop applications.</motion.p>
      </div>
    </div>
  )
}

export default Experience