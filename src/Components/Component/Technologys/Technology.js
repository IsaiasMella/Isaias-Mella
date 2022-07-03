import React from 'react'
import './Technology.css'
import { NavLink, Outlet } from 'react-router-dom'
import {motion} from 'framer-motion'

const Technology = () => {
    return (
        <div>
            <div className='about__title'>
                <motion.h2
                 initial={{opacity:0, y:'-10px'}}
                 animate={{opacity:1, y:0, transition:{
                     ease:'easeOut',
                     duration:1
                 }}}
                >My favorites DevTools</motion.h2>
                <motion.p
                initial={{opacity:0}}
                animate={{opacity:1, transition:{
                    ease:'linear',
                    duration:1,
                    delay:.5
                }}}
                >You can make click for more details of technology</motion.p>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1, transition:{
                    ease:'linear',
                    duration:1,
                    delay:1
                }}}
                className='nav-about-technology'>
                    <NavLink className={({ isActive }) => ('nav-about' + (isActive ? ' link__active devtnav' : ''))}
                        to='devtools-frontend' >
                        {({ isActive }) => (isActive ? 'FRONTEND' : 'Frontend')}
                    </NavLink>
                    <NavLink className={({ isActive }) => ('nav-about' + (isActive ? ' link__active devtnav' : ''))}
                        to='devtools-backend' >
                        {({ isActive }) => (isActive ? 'BACKEND' : 'Backend')}
                    </NavLink>
                </motion.div>
            </div>
            <Outlet />
        </div >
    )
}

export default Technology