import React from 'react'
import '../assets/css/styles.css'
import omega from '../assets/images/omega.png'
const Banner = props => (
  <section className="showcase">
    <div className="content">
      <img src={omega} className="logo" alt="Dan Shai" />
      <div className="title">Hello...</div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vel.
      </div>
    </div>
  </section>
)

export default Banner
