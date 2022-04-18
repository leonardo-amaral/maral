import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../../components/nav/NavSlideShow'
import BackgroundSlider from 'react-background-slider'
import ImagesDePerto from '../../assets/ImagesDePerto'
import '../../styles/CatalogoItems/DetalhesDePerto/DePerto.css'

function DetalhesSlide() {
  return (
    <div>
      <Nav />
      <div className="images">
        <BackgroundSlider
          images={ImagesDePerto}
          duration={5} transition={2}
        />
      </div>
      <Outlet />
    </div>
  )
}

export default DetalhesSlide