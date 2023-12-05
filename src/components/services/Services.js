import React, { useRef } from 'react'
import {motion, useInView} from "framer-motion"
import "./Services.scss"

function Services() {

  const ref = useRef()

  const isInView = useInView(
    ref,
    {margin: "-100px"}
  );
  
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        },
    },
  }

  return (
    <motion.div 
      className='services'
      variants={variants}
      initial="initial"
      //animate="animate" OR
      //whileInView="animate"
      ref={ref}
      animate={isInView && "animate"} // use for desktop build alone
      //animate={ "animate"} // use for mobile
    >
      <motion.div
        className='textContainer'
        variants={variants}
      >
        <motion.p>
            I focus on helping your brand grow
            <br /> and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div
        className='titleContainer'
        variants={variants}
      >
        <div className='title'>
            <img src='/people.webp' alt='' />
            <h1>
                <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
            </h1>
        </div>
        <div className='title'>
            <h1>
                <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.
            </h1>
            <motion.button
              whileHover={{
                backgroundColor: "lightgray",
                color: "orange",
                opacity: 0.9
              }}
            >
              WHAT WE DO ?
              </motion.button>
        </div>
      </motion.div>
      <motion.div
        className='listContainer'
        variants={variants}
      >
        <motion.div className='box'
          whileHover={{
            backgroundColor: "lightgray",
            color: "black"
          }}
        >
            <h2>Branding</h2>
            <p>
                Lorem ipsum dollar sit amet consectetur adipisicing elit. 
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className='box'
          whileHover={{
            backgroundColor: "lightgray",
            color: "black"
          }}
        >
            <h2>Branding</h2>
            <p>
                Lorem ipsum dollar sit amet consectetur adipisicing elit. 
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className='box'
          whileHover={{
            backgroundColor: "lightgray",
            color: "black"
          }}
        >
            <h2>Branding</h2>
            <p>
                Lorem ipsum dollar sit amet consectetur adipisicing elit. 
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className='box'
          whileHover={{
            backgroundColor: "lightgray",
            color: "black"
          }}
        >
            <h2>Branding</h2>
            <p>
                Lorem ipsum dollar sit amet consectetur adipisicing elit. 
            </p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services

