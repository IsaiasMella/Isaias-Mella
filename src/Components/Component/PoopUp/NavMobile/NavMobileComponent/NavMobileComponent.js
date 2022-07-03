import React from 'react'
import './NavMobileComponent.css'
import '../../../../NavBar/NavBar'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as LinkR, useLocation } from 'react-router-dom'
import { Link } from 'react-scroll'

const NavMobileComponent = ({ setearNabBarMobile, valor }) => {
  const matchURL = useLocation()

  const navScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
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
    <motion.div
      className='navMobile__container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeInOut", duration: .5 } }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ease: "easeInOut", duration: .5, delay: .5 } }}
        className='navMobile'>
        {matchLink(matchURL) ? <LinkR to='/about/page/me' onClick={() => setearNabBarMobile(!valor)}>ABOUT</LinkR> :
          <Link to='about' offset={-60} spy={true} smooth={true} duration={1100}
            onClick={() => setearNabBarMobile(!valor)}
          >ABOUT</Link>}

        {matchLink(matchURL) ? <LinkR to='/about/page/projects' onClick={() => setearNabBarMobile(!valor)}>PROJECTS</LinkR> :
          <Link to='projects' offset={-58} spy={true} smooth={true} duration={1100} onClick={() => setearNabBarMobile(!valor)}>PROJECTS</Link>}

        {matchLink(matchURL) ? <LinkR to='/about/contact' onClick={() => setearNabBarMobile(!valor)}>CONTACT</LinkR> :
          <Link to='contact' offset={50} spy={true} smooth={true} duration={1100} onClick={() => setearNabBarMobile(!valor)}>CONTACT</Link>}
      </motion.div>
    </motion.div>
  )
}

export default NavMobileComponent