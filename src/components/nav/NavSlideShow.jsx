import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/NavSlide.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo-items">
            <h1 className="logooo">Maral</h1>
            <h2 className='foto-logooo'>Fotografias</h2>
          </div>
          <div className="content-nav">
            <Link to="/catalogo" className='items-nav'>CATALÓGO</Link>
            <Link to="/" className='item-sair'>SAIR</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav