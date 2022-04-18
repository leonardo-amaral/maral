import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../styles/Catalogo/Box.css'

function Box() {
  return (
    <motion.div className="content-catalogo" data-aos="zoom-in">
      <div className='boxes'>
        <div className="in-box">
          <motion.div className="box-1"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <Link to="/catalogo/detalhes" className='OnImage'>Detalhes de Perto</Link>
            </div>
          </motion.div>

        </div>
        <div className="in-box">
          <motion.div className="box-2"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <Link to="/estudio" className='OnImage'>Estúdio</Link>
            </div>
          </motion.div>

        </div>
        <div className="in-box">
          <motion.div className="box-3"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <Link to="/" className='OnImage'>Ao ar livre</Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="boxes2">
        <div className="in-box">
          <motion.div className="box-4"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <Link to="/" className='OnImage'>Casamento</Link>
            </div>
          </motion.div>
        </div>
        <div className="in-box">
          <motion.div className="box-5"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <Link to="/" className='OnImage'>Neon</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Box