import React from 'react'
import { motion } from 'framer-motion'
import { NavLink, Outlet, useMatch } from 'react-router-dom'
import './ContainerDynamic.css'

const ContainerDynamic = () => {

    const match = useMatch('/about/page/devtools/devtools-backend')

    function isMatchClassName(match) {
        var handdleMatch = ''

        if (match === null) {
            handdleMatch = ''
        } else {
            handdleMatch = match.pathname
        }

        if (handdleMatch === '/about/page/devtools/devtools-backend') { return (' link__active') }
        else { return ('') }
    }

    function isMatchNav(match) {
        var handdleMatch = ''

        if (match === null) {
            handdleMatch = ''
        } else {
            handdleMatch = match.pathname
        }

        if (handdleMatch === '/about/page/devtools/devtools-backend') {
            return ('DEVTOOLS')
        }
        else { return ('DevTools') }
    }

    return (
        <div className='main__container'>
            <div className='container__outlet'>
                <Outlet />
            </div>
            {/*NAV BAR DEL ABOUT */}
            <motion.div className='nav-about__container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: .5 } }}
            >
                <div>
                    <NavLink
                        to='me'
                        className={({ isActive }) =>
                            ("nav-about" + (isActive ? " link__active" : ""))}
                        alt='about me'
                    >
                        {({ isActive }) => (isActive ? 'ABOUT ME' : 'About me').trimEnd()}
                    </NavLink>
                </div>

                <NavLink className={({ isActive }) => ('nav-about' + (isActive ? ' link__active' : ''))}
                    to='experience'
                    alt='experience'>
                    {({ isActive }) => (isActive ? 'EXPERIENCE' : 'Experience')}
                </NavLink>

                <NavLink className={({ isActive }) => ('nav-about' + (isActive ? ' link__active' : '') + (isMatchClassName(match)))}
                    to='devtools/devtools-frontend' >
                    {({ isActive }) => (isActive ? 'DEVTOOLS' : (isMatchNav(match)))}
                </NavLink>

                <NavLink className={({ isActive }) => ('nav-about' + (isActive ? ' link__active' : ''))}
                    to='projects' >
                    {({ isActive }) => (isActive ? 'PROJECTS' : 'Projects')}
                </NavLink>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 1, delay:1 }}}>
                <NavLink className='button-cv' to='/isaias-mella-cv' target='_blanck'>DESCARGAR CV</NavLink>
            </motion.div>
        </div>
    )
}

export default ContainerDynamic