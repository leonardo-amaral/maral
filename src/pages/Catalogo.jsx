import React from 'react'
import Box from '../components/Catalogo/Box'
import Nav from '../components/nav/Nav'
import '../styles/Catalogo/Catalogo.css'

function Catalogo() {
  return (
    <div className='Catalogo'>
      <Nav />
      <Box />
    </div>
  )
}

export default Catalogo