import React from 'react'
import { Outlet } from 'react-router'
import Boxes from '../../components/ItemsCatalogo/Boxes'
import Nav from '../../components/nav/NavCatalogo'
import '../../styles/CatalogoItems/DetalhesDePerto/DetalhesDePerto.css'

function DetalhesDePerto() {
  return (
    <div className='DetalhesDePerto'>
      <div className="effect" data-aos="fade-down">
        <Nav />
      </div>
      <Boxes />
    </div>
  )
}

export default DetalhesDePerto