import React, { useRef } from 'react'
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import Facebk from "../../image/facebook-img.jpg"
import Rt from "../../image/react-img.jfif"
import Spotify from "../../image/spotify-img.jfif"
import Slack from "../../image/slack-img.png"
import "./Portfolio.scss"

  const items = [
    {
      id: 1,
      title: "React Commerce",
      img: Rt,
      desc: "Pariatur aute consectetur ullamco commodo labore ut eu Enim fugiat commodo culpa commodo id mollit ad nostrud culpa.."
    },
    {
      id: 2,
      title: "Facebook Clone Project",
      img: Facebk,
      desc: "Pariatur aute consectetur ullamco commodo labore ut eu Veniam incididunt ut commodo elit commodo sint incididunt.."
    },
    {
      id: 3,
      title: "Slack App Build",
      img: Slack,
      desc: "Pariatur aute consectetur ullamco commodo labore ut eu Nostrud irure veniam sit commodo magna ullamco adipisicing velit.."
    },
    {
      id: 4,
      title: "Spotify App Clone",
      img: Spotify,
      desc: "Pariatur aute consectetur ullamco commodo labore ut eu Aliquip incididunt proident ut veniam adipisicing occaecat elit id officia qui id.."
    }
  ]

  //Single item component:
  const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["start start", "end start"]
    });

    const y = useTransform(
      scrollYProgress,
      [0, 1],
      ["0%", "-300%"] //practice with these numbers
    )

    return (
      <section>
        <div className='container'>
          <div className='wrapper'>
            <div className='imageContainer' ref={ref}>
              <img src={item.img} alt='' />
            </div>
            <motion.div 
              className='textContainer'
              style={{y}}
            >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          
          </div>
        </div>
      </section>
    )
  }

  //Main Portfolio Component
  function Portfolio() {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    });
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30
    })
    

    return (
      <div 
        className='portfolio'
        ref={ref}
      >
        <div className='progress'>
          <h1>Featured Works</h1>
          <motion.div 
            className='progressBar'
            style={{
              scaleX,
              //x-axis progress bar
            }}
          ></motion.div>
        </div>

        {items.map((item) => (
            <Single 
              item={item}
              key={item.id}
            />
          ))
        }
      </div>
    )
  }

  export default Portfolio


