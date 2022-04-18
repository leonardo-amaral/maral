import React from 'react'
import Box from '../components/Catalogo/Box'
import Nav from '../components/nav/Nav'
import DetalhesDePerto from './subPages/DetalhesDePerto'
import '../styles/Catalogo/Catalogo.css'
import { Outlet } from 'react-router'

function Catalogo() {
  return (
    <div className='Catalogo'>
      <Nav />
      <Box />
      <Outlet />
    </div>
  )
}

export default Catalogo