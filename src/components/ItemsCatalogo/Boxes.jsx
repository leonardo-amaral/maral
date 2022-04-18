import React from 'react'
import '../../styles/CatalogoItems/DetalhesDePerto/Boxes.css'
import Background1 from '../../assets/PAGINA2/backgroundCatItems.jpg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

function Boxes() {
  const navigate = useNavigate()
  return (
    <div className='main'>
      <div className="text-ensaio">
        <motion.div onClick={() => navigate('/show-de-perto')} className="box-text" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <h1 className='ensaio-title'>ENSAIOS DE PERTO.</h1>
          <p className='ensaio-p'>As  fotos de perto pode trazer um  certo to de sentimento e expressao, pode-se trabalhar com o estilo sensual e o estilo delicado nesse tipo de foto.</p>
        </motion.div>
        <div className="border">

        </div>
      </div>
      <motion.div onClick={() => navigate('/show-de-perto')} className="box" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <div className="background-box">
        </div>
      </motion.div>
      <motion.div onClick={() => navigate('/show-de-perto')} className="box" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}>
        <div className='background-box1'>.</div>
      </motion.div>
    </div>
  )
}

export default Boxes