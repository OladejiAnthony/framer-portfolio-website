import React from 'react'
import { motion } from 'framer-motion'

function Test() {
    //Framer Motion Testing
  return (
    <motion.div
        className='container'
    >
        <motion.div
            className='box'
            initial={{
                opacity: 0,
                scale: 0.5,
                x: -300
            }}
            animate={{
                opacity: 1,
                scale: 1.5,
                x: 200,
                //y: 500
            }}
            transition={{
                duration: 2,
            }}
        >

        </motion.div>
      
    </motion.div>
  )
}

export default Test
