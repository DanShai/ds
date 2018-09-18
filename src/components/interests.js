import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../assets/css/styles.css'

const Interet = props => (
  <section className="interests">
    <div className="container grid-3 center">
      <div>
        <i className="fab fa-youtube fa-3x" />
        <h3>Github</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          reiciendis!
        </p>
      </div>
      <div>
        <i className="fas fa-chalkboard-teacher fa-3x" />
        <h3>Blog</h3>
        <Link to="/blog">Blog</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          reiciendis!
        </p>
      </div>
      <div>
        <i className="fas fa-briefcase fa-3x" />
        <h3> Projects</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          reiciendis!
        </p>
      </div>
    </div>
  </section>
)

export default Interet
