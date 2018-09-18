import React from 'react'
import '../assets/css/styles.css'
import omega from '../assets/images/omega.png'
import Menu from './menu'

const Banner = props => (
  <section className="showcase">
    <Menu />
    <div className="banner-content">
      <img src={omega} className="logo" alt="Dan Shai" />
      <div className="title">Hello...</div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vel.
      </div>
    </div>
  </section>
)

export default Banner
