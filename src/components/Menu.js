import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../assets/css/styles.css'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/maths">
            Maths
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/learning">
            Machine learning
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/python">
            python
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/ajavascript">
            javascript
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/hobbies">
            Hobbies
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
