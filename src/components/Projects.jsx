import React from 'react'
import {PROJECTS} from '../constants/index'
import { motion } from 'motion/react'
function Projects() {
  return (
    <div id='projects' className='border-b border-neutral-900 pb-4' >
      <motion.h1 
      whileInView={{ opcity: 1 , y: 0 }}
      initial={{ opcity: 0 , y:-100 }}  
      transition={{ duration: 0.5 }}

      className='my-20 text-center text-4xl' >
        Featured Projects
        </motion.h1>
        {PROJECTS.map((project , index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center' >
            <motion.div
              whileInView={{ opcity: 1 , x: 0 }}
              initial={{ opcity: 0 , x:-100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">

                <img 
                    src={project.image}
                    alt={project.title}
                    width={150}
                    height={150}
                    className='rounded-lg'
                />
            </motion.div>
            <motion.div 
              whileInView={{ opcity: 1 , x: 0 }}
              initial={{ opcity: 0 , x:100 }}
              transition={{ duration: 1 }}
            className='w-full max-w-xl lg:w-3/4' >
                <h6 className='mb-2 font-extrabold text-2xl' >
                    {project.title}
                </h6>

                <p className='mb-4 text-neutral-400'>
                    {project.description}
                </p>
                {project.technologies.map((tech , index)=> (
                    <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py- text-sm font-medium text-purple-300' >
                        {tech}
                    </span>
                ))}
            </motion.div>
        </div>
        ))}

      <div>
        {
            
        }
      </div>
    </div>
  )
}

export default Projects
