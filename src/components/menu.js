import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../assets/css/styles.css'

const Menu = props => (
  <nav id="menu">
    <ul className="grid-menu">
      <li>
        <Link onClick={props.onToggleMenu} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link onClick={props.onToggleMenu} to="/blog">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
