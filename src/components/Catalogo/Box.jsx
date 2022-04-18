import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/Catalogo/Box.css'

function Box() {
  return (
    <motion.div className="content-catalogo" data-aos="zoom-in">
      <div className='boxes'>
        <div className="in-box">
          <motion.div className="box-1"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <h1 className='OnImage'>Detalhes de Perto</h1>
            </div>
          </motion.div>

        </div>
        <div className="in-box">
          <motion.div className="box-2"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <h1 className='OnImage'>Detalhes de Perto</h1>
            </div>
          </motion.div>

        </div>
        <div className="in-box">
          <motion.div className="box-3"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <h1 className='OnImage'>Detalhes de Perto</h1>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="boxes2">
        <div className="in-box">
          <motion.div className="box-4"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <h1 className='OnImage'>Detalhes de Perto</h1>
            </div>
          </motion.div>
        </div>
        <div className="in-box">
          <motion.div className="box-5"
            whileTap={{ scale: 0.9 }}>
            <div className="text-box">
              <h1 className='OnImage'>Detalhes de Perto</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Box