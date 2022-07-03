import React from 'react'
import './AllProjects.css'
import { motion } from 'framer-motion'

const filterVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: .5
    }
  }
}

const AllProjects = () => {
  return (
    <div className='all-projects__container'>
      <motion.h2
        initial={{ opacity: 0, y: '-10px' }}
        animate={{
          opacity: 1, y: 0, transition: {
            ease: 'easeOut',
            duration: 1
          }
        }}
      >All my projects</motion.h2>
      <div
        className='projects__container'>
        <div
          className='project'>
          <img src={'#'} alt='' />
          <motion.div className='projects__filter'
            variants={filterVariant}
            initial="hidden"
            whileHover="show"
          >
            <p className='project-filter__title'>Projecto</p>
            <p className='project-filter__description'>Bla Bla Bla Bla Bla Bla Bla Bla Bla</p>
          </motion.div>
        </div>
        <div className='project'>
          <img src={'#'} alt='' />
          <motion.div className='projects__filter'
            variants={filterVariant}
            initial="hidden"
            whileHover="show"
          >
            <p className='project-filter__title'>Projecto</p>
            <p className='project-filter__description'>Bla Bla Bla Bla Bla Bla Bla Bla Bla</p>
          </motion.div>
        </div>
        <div className='project'>
          <img src={'#'} alt='' />
          <motion.div className='projects__filter'
            variants={filterVariant}
            initial="hidden"
            whileHover="show"
          >
            <p className='project-filter__title'>Projecto</p>
            <p className='project-filter__description'>Bla Bla Bla Bla Bla Bla Bla Bla Bla</p>
          </motion.div>
        </div>
        <div
          className='project'>
          <img src={'#'} alt='' />
          <motion.div className='projects__filter'
            variants={filterVariant}
            initial="hidden"
            whileHover="show"
          >
            <p className='project-filter__title'>Projecto</p>
            <p className='project-filter__description'>Bla Bla Bla Bla Bla Bla Bla Bla Bla</p>
          </motion.div>
        </div>
        <motion.div className='project'>
          <img src={'#'} alt='' />
          <motion.div className='projects__filter'
            variants={filterVariant}
            initial="hidden"
            whileHover="show">
            <p className='project-filter__title'>Projecto</p>
            <p className='project-filter__description'>Bla Bla Bla Bla Bla Bla Bla Bla Bla</p>
          </motion.div>
        </motion.div>
        <motion.div className='project'>
          <img src={'#'} alt='' />
          <motion.div className='projects__filter'
            variants={filterVariant}
            initial="hidden"
            whileHover="show"
          >
            <p className='project-filter__title'>Projecto</p>
            <p className='project-filter__description'>Bla Bla Bla Bla Bla Bla Bla Bla Bla</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AllProjects