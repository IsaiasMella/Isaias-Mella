import { React, useRef, useState } from 'react'
import { useMatch } from 'react-router-dom';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import './FormContact.css'
import PoopUp from '../PoopUp/PoopUp';
import MailRecibido from '../PoopUp/MailRecibido/MailRecibido';

const inputsVariant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: .5,
            delay: 1
        }
    }
}

const expresiones = {
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    //password: /^.{4,12}$/, // 4 a 12 digitos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: /^[a-zA-Z0-9]+$/ // Letras y espacios, pueden llevar acentos.
    //telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validacionesCampos = {
    name: false,
    email: false,
    message: false
}

const FormContact = () => {

    let [poopUp, setPoopUp] = useState(false)
    let [mailEnviado, setMailEnviado] = useState(false)
    let inputs = document.querySelectorAll('#formulario input')
    let textArea = document.querySelectorAll('#formulario textarea')
    const form = useRef();
    const match = useMatch('/about/contact')

    //#region comprobacion de formulario
    const nameRef = useRef();
    const inputNameError = useRef()
    const nameError = useRef();
    const emailRef = useRef();
    const inputEmailError = useRef()
    const emailError = useRef();
    const textareaRef = useRef();
    const inputMessageError = useRef()
    const messageError = useRef();
    const errorForm = useRef();



    const formValidation = (e) => {
        switch (e.target.name) {
            case 'name':
                validarCampor(expresiones.nombre, e.target, nameRef, inputNameError, nameError)
                break
            case 'email':
                if (e.type === 'blur') {
                    validarCampor(expresiones.email, e.target, emailRef, inputEmailError, emailError)
                }
                break
            case 'message':
                validarCampor(expresiones.message, e.target, textareaRef, inputMessageError, messageError)
                break
            default:
                { }
        }
    }

    const validarCampor = (expresion, input, campo, inputError, error) => {
        if (expresion.test(input.value)) {
            campo.current.classList.remove('input-incorrecto')
            inputError.current.classList.remove('error-is-active')
            error.current.classList.remove('error-active')
            campo.current.classList.add('input-correcto')
            validacionesCampos[campo.current.name] = true;
        } else {
            campo.current.classList.remove('input-correcto')
            campo.current.classList.add('input-incorrecto')
            inputError.current.classList.add('error-is-active')
            error.current.classList.add('error-active')
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', formValidation)
        input.addEventListener('blur', formValidation)

    })

    textArea.forEach((textarea) => {
        textarea.addEventListener('keyup', formValidation)
        textarea.addEventListener('blur', formValidation)
    })

    function enviarEmail(e) {
        e.preventDefault();

        if (validacionesCampos.name && validacionesCampos.email && validacionesCampos.message) {
            emailjs.sendForm('isaias_mella', 'Portfolio_template', form.current, 'Dfihs0WPqBLJLQ0Nd').then(() => setMailEnviado(mailEnviado = true))

            document.querySelectorAll('.input-correcto').forEach((estilo) => {
                nameRef.current.classList.remove('input-correcto')
                emailRef.current.classList.remove('input-correcto')
                textareaRef.current.classList.remove('input-correcto')
                errorForm.current.classList.remove('errorForm-active')
            })
            e.target.reset()
        } else {
            setMailEnviado(mailEnviado = false)
            textareaRef.current.classList.add('error-is-active')
            errorForm.current.classList.add('errorForm-active')
        }
        validacionesCampos.name = false
        validacionesCampos.email = false
        validacionesCampos.message = false

    }
    //#endregion

    function isMatchFormClassName(match) {
        var handdleMatchForm = ''

        if (match === null) {
            handdleMatchForm = ''
        } else {
            handdleMatchForm = '/about/contact'
        }

        if (handdleMatchForm === '/about/contact') {
            return ('about')
        } else {
            return ('footer')
        }
    }


    return (
        <motion.form
            className={isMatchFormClassName(match) + '__container-form'}
            id='formulario'
            ref={form}
            type="multipart/form-data"
            method="post"
            onSubmit={enviarEmail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 1 } }}>
            <div className='input' ref={inputNameError}>
                <motion.input
                    className={isMatchFormClassName(match) + '__form' + ' '
                        + isMatchFormClassName(match) + '__name'}
                    ref={nameRef}
                    placeholder='Name'
                    type='text'
                    id="name"
                    variants={inputsVariant}
                    initial="hidden"
                    animate="show"
                    autoComplete='off'
                    name='name'
                    onChange={formValidation} />
                <div className={'error ' + isMatchFormClassName(match) + '__error' + ' error-name'} ref={nameError}>
                    <p>This field only accepted letters (upper and lower case)</p>
                </div>
            </div>
            <div className='input' ref={inputEmailError}>

                <motion.input className={isMatchFormClassName(match) + '__form'} placeholder='Email' type='email' name="email" id="email"
                    ref={emailRef}
                    variants={inputsVariant}
                    initial="hidden"
                    animate="show"
                    onChange={formValidation}
                    autoComplete='off'
                />
                <div className={'error ' + isMatchFormClassName(match) + '__error' + ' error-email'} ref={emailError}>
                    <p>Incorrect format. Check that you have @ and a correct email format.</p>
                </div>
            </div>
            <div className='input textarea' ref={inputMessageError}>
                <motion.textarea className={isMatchFormClassName(match) + '__textarea'} placeholder='Come on, ask me!' name="message" id="message"
                    ref={textareaRef}
                    variants={inputsVariant}
                    initial="hidden"
                    animate="show"
                    onChange={formValidation} />
                <div className={'error ' + isMatchFormClassName(match) + '__error'} ref={messageError}>
                    <p>Enter a message</p>
                </div>
                <div className='container__error' ref={errorForm}>
                    <div className='form__error'>
                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                        <p>Complete all field for send the e-mail</p>
                    </div>
                </div>
            </div>

            {(poopUp && mailEnviado) &&
                <PoopUp activate={poopUp}>
                    <MailRecibido
                        setearPoopUp={setPoopUp}
                        valor={poopUp}
                    />
                </PoopUp>

            }
            <motion.button
                className={isMatchFormClassName(match) + '__button'}
                as='button'
                type="submit"
                value="Send"
                onClick={() => setPoopUp(!poopUp)}
                initial={{ y: "30px", opacity: 0 }}
                animate={{ y: "0px", opacity: 1, transition: { ease: "easeInOut", duration: 1, delay: 2 } }}
            >SEND</motion.button>

        </motion.form >
    )

}

export default FormContact