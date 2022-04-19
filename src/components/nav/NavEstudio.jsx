import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/NavEstudio.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
      <header>
        <nav className='nav'>
          <div className="logo-items">
            <h1 className="logoo">Maral</h1>
            <h2 className='foto-logoo'>Fotografias</h2>
          </div>
          <div className="content-nav">
            <Link to="/" className='items-nav'>INICIO</Link>
            <Link to="/catalogo" className='items-nav'>CATALÓGO</Link>
            <Link to="/" className='item-sair'>SAIR</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav