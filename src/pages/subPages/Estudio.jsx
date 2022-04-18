import React from 'react'
import { Outlet } from 'react-router'
import Boxes from '../../components/ItemsCatalogo/BoxesEstudio'
import Nav from '../../components/nav/NavEstudio'
import '../../styles/CatalogoItems/Estudio/Estudio.css'

function DetalhesDePerto() {
  return (
    <div className='Estudio'>
      <div className="effect" data-aos="fade-down">
        <Nav />
      </div>
      <Boxes />
    </div>
  )
}

export default DetalhesDePerto