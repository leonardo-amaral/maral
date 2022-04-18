import React from 'react'
import Tracinho from '../../assets/tracinho.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import '../../styles/LandingPage/LandingContent.css'

function LandingContent() {
  const navigate = useNavigate()
  return (
    <div className="content">
      <div className="text">
        <h1 className='text-intro'>Conheça</h1>
        <div className='meus'>
          <h1 className='text-intro'>Meus</h1>
          <img className='tracinho' src={Tracinho} alt="" />
        </div>
        <div className="trabalhos-text">
          <h1 className='text-size'>trabalhos</h1>
          <h2 className='dot'>.</h2>
        </div>
      </div>
      <motion.button className='btn-landing'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate('/catalogo')}>COMECE</motion.button>
    </div>
  )
}

export default LandingContent