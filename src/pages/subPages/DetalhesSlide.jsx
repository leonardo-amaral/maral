import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../../components/nav/NavCatalogo'
import BackgroundSlider from 'react-background-slider'
import ImagesDePerto from '../../assets/ImagesDePerto'

function DetalhesSlide() {
  return (
    <div>
      <Nav />
      <BackgroundSlider
        images={ImagesDePerto}
        duration={5} transition={2} />
      <Outlet />
    </div>
  )
}

export default DetalhesSlide