import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "./Sidebar.scss"
import Links from './links/Links';
import ToggleBtn from './menu/ToggleBtn';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  //Framer motion variant animation
  const variants = {
      open : {
          clipPath: "circle(1200px at 50px 50px)",
          transition: {
              type: "spring",
              stiffness: 20,
          }
      },
      closed : {
          clipPath: "circle(30px at 50px 50px)",
          transition: {
              delay: 0.2,
              type: "spring",
              stiffness: 400,
              damping: 40
          }
      }
  }

  return (
    <motion.div 
        className='sidebar'
        animate={open ? "open" : "closed"}
    >
      <motion.div 
        className='bg'
        variants={variants}
      >
       <Links />
      </motion.div>
      <ToggleBtn setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar

//48mins