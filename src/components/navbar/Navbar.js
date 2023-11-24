/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { motion } from 'framer-motion'
import "./Navbar.scss"
import Sidebar from '../sidebar/Sidebar'


function Navbar() {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
            initial={{
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 0.5
            }}
        >
            Tdwonder
        </motion.span>
        <div className='social'>
            <a href='#'>
                <img src='/facebook.png' alt='logo'/>
            </a>
            <a href='#'>
                <img src='/instagram.png' alt='logo'/>
            </a>
            <a href='#'>
                <img src='/youtube.png' alt='logo'/>
            </a>
            <a href='#'>
                <img src='/dribbble.png' alt='logo'/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar


