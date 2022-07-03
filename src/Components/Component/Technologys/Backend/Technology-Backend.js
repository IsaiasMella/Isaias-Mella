import React from 'react'
import './Technology-Backend.css'
import SQL from '../../../../Video/sql.png'
import SQLServer from '../../../../Video/sqlserver.png'
import MySql from '../../../../Video/mysql.png'
import { motion } from 'framer-motion'

const primeraFilaBackendVariant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1
        }
    }
}

const segundaFilaBackendVariant = {
    hidden: {
        y: '-20px',
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1,
            delay: .5
        }
    }
}

const TechnologyBackend = () => {
    return (
        <div className='backend__container'>
            <motion.div
                variants={primeraFilaBackendVariant}
                initial='hidden'
                animate='show'
                className='primer__fila-backend'>
                <div>
                    <a href='https://developer.mozilla.org/en-US/docs/Glossary/SQL' target='_blank' rel="noreferrer">
                        <img className='logo' src={SQL} alt='SQL' />
                    </a>
                </div>
            </motion.div>
            <motion.div
                variants={segundaFilaBackendVariant}
                initial='hidden'
                animate='show'
                className='segunda__fila-backend'>
                <div>
                    <a href='https://www.microsoft.com/en-us/sql-server' target='_blank' rel="noreferrer">
                        <img className='logo' src={SQLServer} alt='SQLServer' />
                    </a>
                </div>
                <div>
                    <a href='https://www.mysql.com/' target='_blank' rel="noreferrer">
                        <img className='logo MySql' src={MySql} alt='MySql' />
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default TechnologyBackend