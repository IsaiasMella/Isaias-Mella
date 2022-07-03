import  { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const NavMobile = ({ children }) => {
  const [menuPortal] = useState(document.createElement(`div`))

  useEffect(() => {

    document.body.appendChild(menuPortal)

    return () => {
      menuPortal.remove()
    };
  }, [menuPortal]);

  return ReactDOM.createPortal(children, menuPortal)
}

export default NavMobile