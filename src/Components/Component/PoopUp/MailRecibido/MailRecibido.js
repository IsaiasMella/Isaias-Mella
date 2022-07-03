import React from 'react'
import './MailRecibido.css'
import { motion } from 'framer-motion'

const MailRecibido = ({ setearPoopUp, valor }) => {
    return (
        <div className='poopup-mail__container'>
            <div className='poopup-mail'>
            <div className='check__container'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 23 22"
                >
                    <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1)">
                        <motion.path 
                        initial={{pathLength:0, opacity:0}}
                        animate={{pathLength:1, opacity:1, transition:{ease:'easeInOut', duration:2}}}
                        stroke="#1eda05" /*82c6fd*//*1e8805 */
                        d="M20 10.07V11a10 10 0 1 1-5.93-9.14"
                        />
                        <motion.path className='check'
                        initial={{pathLength:0, opacity:0}}
                        animate={{pathLength:1, opacity:1,  transition:{ease:'easeInOut', duration:1.5, delay:.5}}}
                        stroke="#1e8a05"/*208DE8 */ d="M21 2L10 13l-3-3" />
                    </g>
                </svg>
            </div>
                <div className='poopup-text'>
                    {/* <h4>Thacks You!</h4> */}
                    <h6>I received your mail!</h6>
                    <p>I will respond as soon as possible</p>
                </div>
                <div className='poopup-button__container'>
                    <button
                        className='poopup-button'
                        as='button'
                        onClick={() => setearPoopUp(valor = false)}
                    >OK</button>
                </div>
            </div>
        </div>
    )
}

export default MailRecibido