import React from 'react'
import { FaPinterestSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/LandingPage/LandingRodape.css'

function rodape() {
  return (
    <div>
      <div className="rodape-content">
        <h1 className='creditos'>Design elaborado por: Raquel Lopes Martins</h1>
        <div className="rodape-items">
          <motion.a href="" className="items"
            whileHover={{ scale: 1.1 }}
          ><FaPinterestSquare /></motion.a>
          <a href="" className="items"><FaFacebookSquare /></a>
          <a href="" className="items"><FaInstagramSquare /></a>
          <a href="" className="items"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  )
}

export default rodape