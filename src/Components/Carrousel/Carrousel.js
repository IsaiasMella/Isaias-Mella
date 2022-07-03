import React, { useRef, useEffect } from 'react'
import './Carrousel.css'
import Button from '../Component/Buttons/Button'
import amazon from '../../Video/amazon.jpg'
import netflix from '../../Video/netflix.jpg'
import spotify from '../../Video/spotify.png'
import { motion } from 'framer-motion'

const Carrousel = () => {

    const SlideContainer = useRef(null)
    const DescriptionContainer = useRef(null)
    const IntervaloSlideContainer = useRef(null)
    const IntervaloDescriptionContainer = useRef(null)

    const siguiente = () => {
        //comprobando que el slideConteiner tenga elementos
        if ((SlideContainer.current.children.length > 0) && (DescriptionContainer.current.children.length > 0)) {

            //obtenemos el primer elemento del slideContainer
            const primerSlide = SlideContainer.current.children[0]
            const firstDescription = DescriptionContainer.current.children[0]

            //le decimos que tenga transiscion
            SlideContainer.current.style.transition = `2s ease-out all`
            DescriptionContainer.current.style.transition = `2s ease-out all`

            const tamañoSlide = SlideContainer.current.children[0].offsetWidth

            //mover el slideContainer
            SlideContainer.current.style.transform = `translateX(-${tamañoSlide}px)`
            DescriptionContainer.current.style = `opacity:0`

            const transicion = () => {
                //reiniciamos la posicion de SliceContainer
                SlideContainer.current.style.transition = 'none'
                DescriptionContainer.current.style.transition = 'none'
                SlideContainer.current.style.transform = `translateX(0)`
                DescriptionContainer.current.style = `opacity:1`

                //tomamos el primer elemento y lo mandamos al final
                SlideContainer.current.appendChild(primerSlide)
                DescriptionContainer.current.appendChild(firstDescription)

                SlideContainer.current.removeEventListener('transitionend', transicion)
                // DescriptionContainer.current.removeEventListener('transitionend', transicion)
            }

            //eventlistener para cuando termian la transicion
            SlideContainer.current.addEventListener('transitionend', transicion)

        }
    }

    const anterior = () => {
        if (SlideContainer.current.children.length > 0) {
            const index = SlideContainer.current.children.length - 1
            const indexDescription = DescriptionContainer.current.children.length - 1
            const ultimoSlide = SlideContainer.current.children[index]
            const ultimaDescription = DescriptionContainer.current.children[indexDescription]

            SlideContainer.current.insertBefore(ultimoSlide, SlideContainer.current.firstChild)
            DescriptionContainer.current.insertBefore(ultimaDescription, DescriptionContainer.current.firstChild)

            const tamañoSlide = SlideContainer.current.children[0].offsetWidth

            SlideContainer.current.style.transition = 'none'

            DescriptionContainer.current.style.transition = 'none'
            SlideContainer.current.style.transform = `translateX(-${tamañoSlide}px)`
            DescriptionContainer.current.style = `opacity:0`

            setTimeout(() => {
                SlideContainer.current.style.transition = '2s ease-out all'
                DescriptionContainer.current.style.transition = `2s ease-out all`
                SlideContainer.current.style.transform = `translateX(0)`
                DescriptionContainer.current.style = `opacity:1`
            }, .3)
        }
    }

    useEffect(() => {
        IntervaloSlideContainer.current = setInterval(() => {
            siguiente()
        }, 8500)

        SlideContainer.current.addEventListener('mouseenter', () => {
            clearInterval(IntervaloSlideContainer.current)
        })

        SlideContainer.current.addEventListener('mouseleave', () => {
            IntervaloSlideContainer.current = setInterval(() => {
                siguiente()
            }, 8500)
        })
    }, []);

    return (
        <motion.div
            id='projects'
            className='carrousel__container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: .5 } }}
        >
            {/* <div className='container'></div> */}
            <div className='title'>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2, delay: .75 } }}
                >BETTER PROJECTS</motion.h2>
            </div>
            <div className='carrousel'>
                <motion.div
                    className='slide__container'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2 } }}>
                    <div className='slide' ref={SlideContainer}>
                        <a href='#'>
                            <img src={netflix} alt='netflix' />
                        </a>
                        <a href='#'>
                            <img src={amazon} alt='amazon' />
                        </a>
                        <a href='#'>
                            <img src={spotify} alt='spotify' />
                        </a>
                    </div>
                </motion.div>
                <div className='buttons_container'>
                    <button
                        className='button-left'
                        onClick={anterior}
                    >{'<'}</button>
                    <button
                        className='button-rigth'
                        onClick={siguiente}
                    >{'>'}</button>
                </div>
            </div>
            <div className='description__container'>
                <div className='description' ref={DescriptionContainer}>
                    <div className='slide__description' >
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2, delay: 1 } }}
                        >Project 1</motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2, delay: 1.25 } }}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error distinctio amet. Fugiat praesentium unde, exercitationem consectetur aliquam id aperiam hic incidunt ut consequatur modi omnis tempore molestiae quidem necessitatibus perspiciatis.
                        </motion.p>
                    </div>
                    <div className='slide__description'>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2, delay: 1 } }}
                        >Project 2</motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2, delay: 1.25 } }}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error distinctio amet. Fugiat praesentium unde, exercitationem consectetur aliquam id aperiam hic incidunt ut consequatur modi omnis tempore molestiae quidem necessitatibus perspiciatis.
                        </motion.p>
                    </div>
                    <div className='slide__description'>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2, delay: 1 } }}
                        >Project 3</motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2, delay: 1.25 } }}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error distinctio amet. Fugiat praesentium unde, exercitationem consectetur aliquam id aperiam hic incidunt ut consequatur modi omnis tempore molestiae quidem necessitatibus perspiciatis.
                        </motion.p>
                    </div>
                </div>
            </div>
            <motion.div
                className='button__container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2, delay: 2 } }}
            >
                <Button text='VIEW PROJECT' />
            </motion.div>
        </motion.div>
    )
}

export default Carrousel