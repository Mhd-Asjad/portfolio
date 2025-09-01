import React from 'react'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import {CONTACT} from '../constants/index'
import { motion } from 'motion/react'
function Contact() {
  return (
    <div id='contact' className='border-b border-neutral-900 pb-20' >
      <motion.h1
        whileInView={{ opcity: 1 , y: 0 }}
        initial={{ opcity: 0 , y:-100 }}
        transition={{ duration: 0.5 }}
       className='my-10 text-center text-4xl' >
        Get in Touch
      </motion.h1>
      <div className='text-center tracking-tighter' >
        <motion.p
          whileInView={{ opcity: 1 , x: 0 }}
          initial={{ opcity: 0 , x:-100 }}
          transition={{ duration: 1 }}
         className='my-4' >{CONTACT.address}</motion.p>
        <motion.p 
          whileInView={{ opcity: 1 , x: 0 }}
          initial={{ opcity: 0 , x:100 }}
          transition={{ duration: 1 }}
        
        className='my-4'> {CONTACT.phoneNo}</motion.p>
        <a href="#" className='border-b' >
            {CONTACT.email}
        </a>

      </div>
      <div className='flex items-center justify-center space-x-6 mt-8' >
        <a 
          href="https://www.linkedin.com/in/mhd-asjad"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-600 transition-colors"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://www.instagram.com/asj.edd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>

        <a 
          href="https://github.com/Mhd-Asjad" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a>

        <a 
          href="https://twitter.com/mhd_asjad5160" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl hover:text-sky-500 transition-colors"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </div>
  )
}

export default Contact
