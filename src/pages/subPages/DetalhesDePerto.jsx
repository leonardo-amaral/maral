import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../../components/nav/NavCatalogo'
import '../../styles/CatalogoItems/DetalhesDePerto/DetalhesDePerto.css'

function DetalhesDePerto() {
  return (
    <div className='DetalhesDePerto'>
      <Nav />
    </div>
  )
}

export default DetalhesDePerto