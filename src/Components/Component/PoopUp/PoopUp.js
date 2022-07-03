import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import './PoopUp.css'

const PoopUp = ({ children }) => {

    let [poopUpNode] = useState(document.createElement(`div`));

    useEffect(() => {

        document.body.appendChild(poopUpNode)
        return () => {
            poopUpNode.remove()
        }
    }, [poopUpNode]);

    return ReactDOM.createPortal(children, poopUpNode)
}

export default PoopUp