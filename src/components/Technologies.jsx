import React from 'react'
import { motion } from "motion/react"
import { stack } from '../constants'

const iconVariants = (duration) => ({

  initial : {y: -10 },
  animate: {
    y: [ 10, -10 ],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse"
    
    }
  }
  
})
function Technologies() {
  return (
    <div id='technologies' className='border-b border-neutral-800 pb-24'>  
      <h2 className='my-20 text-center text-4xl' >
        Technologies
      </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">

        {
          stack.map((tech , index) => (
            <motion.div
              variants={iconVariants(2 + index * 0.2)}
              initial="initial"
              animate="animate"
              key={index}
              className='rounded-2xl border-4 border-neutral-800 p-3' >
            <tech.Icon className={`text-7xl ${tech.color}`} />
            </motion.div>
          ))
        }
        </div>
    </div>
    
  )
}

export default Technologies
