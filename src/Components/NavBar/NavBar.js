import React, { useState } from 'react'
import './NavBar.css'
import { motion } from 'framer-motion'
import { Link as LinkR, useMatch, useLocation } from "react-router-dom";
import { Link } from 'react-scroll';
import NavMobileComponent from '../Component/PoopUp/NavMobile/NavMobileComponent/NavMobileComponent';
import NavMobile from '../Component/PoopUp/NavMobile/NavMobile';

const NavBar = ({ isScrolling }) => {
    const [navBarMobile, setNavBarMobile] = useState(false)
    const match = useMatch('/isaias-mella-cv')
    const matchURL = useLocation()

    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    function isMatchRoute(match) {
        var handdleMatch = ''

        if (match === null) {
            handdleMatch = ''
        } else {
            handdleMatch = match.pathname
        }

        if (handdleMatch === '/isaias-mella-cv') { return (` cv_active`) }
        else { return ('') }
    }

    function matchLink(matchURL) {

        switch (matchURL.pathname) {
            case '/about/page/me':
                return (true);
            case '/about/page/experience':
                return (true);
            case '/about/page/devtools/devtools-frontend':
                return (true);
            case '/about/page/devtools/devtools-backend':
                return (true);
            case '/about/page/projects':
                return (true);
            case '/about/contact':
                return (true);
            default:
                return (false)
        }
    }

    return (
        <motion.nav className={`NavBar ${(isScrolling > 20 ? 'scrolling' : ''.trimEnd()) + (isMatchRoute(match)) + (navBarMobile ? ' portal-open' : '')}`}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    ease: "easeInOut",
                    transition: 2,
                    delay: 1.5
                }
            }}>
            <div
                className='NavBar__Logo'
                onClick={scrollTop}>
                <LinkR to='/'>
                    <h2 className='logo'>IM</h2>
                </LinkR>
            </div>
            <div className={`NavBar__menu__container`}>
                <div className='hamburguer-menu__container' id='hamburguer'
                    onClick={() => setNavBarMobile(!navBarMobile)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g dataname="Layer 2">
                            <g dataname="menu">
                                <rect width="24" height="24" opacity="0" transform="rotate(180 12 12)" />
                                <rect width="18" height="2" x="3" y="11" rx=".95" ry=".95" />
                                <rect width="18" height="2" x="3" y="16" rx=".95" ry=".95" />
                                <rect width="18" height="2" x="3" y="6" rx=".95" ry=".95" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div
                    className={`NavBar__menu ${isScrolling > 20 ? 'scrolling__menu' : ''.trimEnd()}`}
                    onClick={scrollTop}
                >
                    {matchLink(matchURL) ? <LinkR to='/about/page/me' >ABOUT</LinkR> :
                        <Link to='about' offset={-95} spy={true} smooth={true} duration={1100} >ABOUT</Link>}
                    {matchLink(matchURL) ? <LinkR to='/about/page/projects'>PROJECTS</LinkR> :
                        <Link to='projects' offset={-70} spy={true} smooth={true} duration={1100}>PROJECTS</Link>}
                    {matchLink(matchURL) ? <LinkR to='/about/contact'>CONTACT</LinkR> :
                        <Link to='contact' offset={50} spy={true} smooth={true} duration={1100}>CONTACT</Link>}
                </div>
            </div>
            {navBarMobile && <NavMobile active={navBarMobile}
            >
                <NavMobileComponent
                    setearNabBarMobile={setNavBarMobile}
                    valor={navBarMobile} />
            </NavMobile>}

        </motion.nav>
    )
}

export default NavBar