import React from 'react'
import { motion } from 'framer-motion'
import "./Hero.scss"

function Hero() {
  const textVariants = {
    initial : {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 1,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }

  }
  const slidingVariants = {
    initial : {
      x: 0,
    },
    animate: {
        x: "-180%",
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 20,
        }
    }
  }

  return (
    <div
        className='hero'
    >
      <div className='wrapper'>
        <motion.div 
            className='textContainer'
            variants={textVariants}
            initial="initial"
            animate="animate"
        >
            <motion.h2 variants={textVariants}>
                Oladeji Anthony
            </motion.h2>
            <motion.h1 variants={textVariants}>
                Frontend Web and Mobile Developer
            </motion.h1>
            <motion.div className='buttons' variants={textVariants}>
                <motion.button variants={textVariants}>
                    See the Latest Works
                </motion.button>
                <motion.button variants={textVariants}>
                    Contact Me
                </motion.button>
            </motion.div>
            <motion.img  
                src='/scroll.png' 
                alt='' 
                variants={textVariants} 
               // initial="initial" 
                animate="scrollButton" 
            />
        </motion.div>
      </div>  
      <motion.div 
        className='slidingTextContainer'
        variants={slidingVariants}
        initial="initial"
        animate="animate"
      >
        Software Development Engineer
      </motion.div>
      <div className='imageContainer'>
        <img src='/hero.png' alt='hero-pics' />
      </div>
    </div>
  )
}

export default Hero


