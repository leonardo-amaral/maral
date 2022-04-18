import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import '../../styles/Catalogo/Box.css'

function Box() {
  const navigate = useNavigate()

  return (
    <motion.div className="content-catalogo" data-aos="zoom-in">
      <div className='boxes'>
        <div className="in-box">
          <motion.div onClick={() => navigate('/detalhes')} className="box-1"
            whileTap={{ scale: 0.5 }}>
            <div className="text-box">
              <a className='OnImage'>Detalhes de Perto</a>
            </div>
          </motion.div>

        </div >
        <div className="in-box">
          <motion.div onClick={() => navigate('/detalhes')} className="box-2"
            whileTap={{ scale: 0.5 }}>
            <div className="text-box">
              <a className='OnImage'>Estúdio</a>
            </div>
          </motion.div>

        </div>
        <div className="in-box">
          <motion.div onClick={() => navigate('/detalhes')} className="box-3"
            whileTap={{ scale: 0.5 }}>
            <div className="text-box">
              <a className='OnImage'>Ao ar Livre</a>
            </div>
          </motion.div>
        </div>
      </div >
      <div className="boxes2">
        <div className="in-box">
          <motion.div onClick={() => navigate('/detalhes')} className="box-4"
            whileTap={{ scale: 0.5 }}>
            <div className="text-box">
              <a className='OnImage'>Casamento</a>
            </div>
          </motion.div>
        </div>
        <div className="in-box">
          <motion.div onClick={() => navigate('/detalhes')} className="box-5"
            whileTap={{ scale: 0.5 }}>
            <div className="text-box">
              <a className='OnImage'>Neon</a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div >
  )
}

export default Box