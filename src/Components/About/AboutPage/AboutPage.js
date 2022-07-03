import React from 'react'
import './AboutPage.css'
import yo_aboute from '../../../Video/yo_aboute.png'
import { NavLink, Outlet, useMatch } from 'react-router-dom'
import { motion } from 'framer-motion'

const AboutePage = () => {
    const projectsActive = useMatch('/about/page/projects')

    function projectsMobileActive(projectsActive) {
        var handdleMatchProjects = ''

        if (projectsActive === null) {
            handdleMatchProjects = ''
        } else {
            handdleMatchProjects = projectsActive.pathname
        }

        if (handdleMatchProjects === '/about/page/projects') { return (true) }
        else { return (false) }
    }

    return (
        <div className={`aboute__container ${projectsMobileActive(projectsActive) ? ' aboute__projects-active' : ''}`}>
            <motion.div
                className={`img ${projectsMobileActive(projectsActive) ? ' img__projects-active' : ''}`}
                initial={{ opacity: 0, y: '50px' }}
                animate={{
                    opacity: 1, y: 0, transition: {
                        ease: 'easeIn',
                        duration: 1.5
                    }
                }}
            >
                <img src={yo_aboute} alt='isaias' className='img_fondo' />
            </motion.div>
            <div className={`container__dynamic ${console.log(projectsMobileActive(projectsActive)) + projectsMobileActive(projectsActive) ? ' container__projects-active' : ''}`}>
                <Outlet />
                <div className='rrss__container'>
                    <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: 1.25} }}
                    >Contact</motion.p>
                    <div className='icon__container-about'>
                        <div className='icon-about'>
                            <motion.a href='https://www.linkedin.com/in/isaias-mella/' target="_blank" rel="noreferrer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: 1.5 } }}
                            >
                                <i className='fab fa-linkedin linkedin'></i>
                            </motion.a>
                        </div>
                        <div className='icon-about'>
                            <motion.a href='https://github.com/IsaiasMella' target="_blank" rel="noreferrer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: 1.5 } }}
                            >
                                <i className='fab fa-github github'></i>
                            </motion.a>
                        </div>
                        <motion.div className='icon-about'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: 1.5 } }}
                        >
                            <NavLink className='gmail-icon' to='/about/contact' >
                                <svg
                                    className='sns-icon gmail'
                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="30" height="30"
                                    viewBox="0 0 50 50">
                                    <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path></svg>
                            </NavLink>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutePage