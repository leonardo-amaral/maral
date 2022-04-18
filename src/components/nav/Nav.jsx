import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/ContentNav.css'
import Catalogo from '../../pages/Catalogo'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage'

function Nav() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo-items">
            <h1 className="logo">Maral</h1>
            <h2 className='foto-logo'>Fotografias</h2>
          </div>
          <div className="content-nav">
            <Link to="/" className='nav-items'>INICIO</Link>
            <Link to="/catalogo" className='nav-items'>CATALÓGO</Link>
            <Link to="/sobre" className='nav-items'>SOBRE MIN</Link>
            <Link to="/contato" className='nav-items'>CONTATO</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav