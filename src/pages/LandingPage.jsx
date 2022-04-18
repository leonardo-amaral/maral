import React from 'react'
import Nav from '../components/nav/Nav'
import LandingContent from '../components/content/LandingContent'
import Carousel from '../components/content/CarrouseSlide'
import Rodape from '../components/content/rodape'
import '../styles/LandingPage/LadinginPage.css'

function LandingPage() {
  return (
    <div>
      <section className="ladingPage">
        <Nav />
        <div className="content-org">
          <LandingContent />
          <Carousel />
        </div>
        <div className="rodape">
        </div>
      </section>
    </div>
  )
}

export default LandingPage