import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../assets/css/menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showmenu: false,
      count: 0,
    }
    this.scrolly = 0
    this.curscrolly = 0
    this.hidetimeout = null
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handlescroll())
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handlescroll())
    clearTimeout(this.hidetimeout)
  }

  hidemenu() {
    this.scrolly = this.curscrolly
    this.hidetimeout = setTimeout(() => {
      this.setState({
        showmenu: false,
        count: this.state.count + 1,
      })
    }, 500)
    console.log('in hide', JSON.stringify(this.state))
  }

  handlelabel() {
    const { count } = this.state
    if (count > 0) {
      this.hidetimeout = setTimeout(() => {
        this.setState({
          showmenu: false,
          count: 0,
        })
      }, 500)
    } else {
      this.hidetimeout = setTimeout(() => {
        this.setState({
          count: this.state.count + 1,
          showmenu: true,
        })
      }, 500)
    }

    console.log('in label', JSON.stringify(this.state))
  }

  handlescroll() {
    this.curscrolly = window.scrollY
    if (this.scrolly !== this.curscrolly) {
      this.hidetimeout = setTimeout(() => {
        this.setState({
          showmenu: true,
        })
        this.scrolly = this.curscrolly
      }, 50)
    }
  }

  render() {
    // console.log(this.state.showmenu, this.scrolly)
    return (
      <nav className={`menu ${this.state.showmenu ? 'visible' : 'hidden'}`}>
        <input
          type="checkbox"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label
          onClick={() => this.handlelabel()}
          className="menu-open-button"
          htmlFor="menu-open"
        >
          <span className="lines line-1" />
          <span className="lines line-2" />
          <span className="lines line-3" />
        </label>

        <Link
          onClick={() => this.hidemenu()}
          className="alink menu-item blue"
          to="/mnistpred"
        >
          {' '}
          <i className="icon">
            <FontAwesomeIcon icon={faCoffee} />{' '}
          </i>{' '}
        </Link>
        <a
          onClick={() => this.hidemenu()}
          href="https://github.com/DanShai"
          className="menu-item green"
        >
          {' '}
          <i className="icon">
            <FontAwesomeIcon icon={faGithub} />{' '}
          </i>{' '}
        </a>
        <Link
          onClick={() => this.hidemenu()}
          className="alink menu-item red"
          to="/"
        >
          {' '}
          <i className="icon">
            <FontAwesomeIcon icon={faHome} />{' '}
          </i>{' '}
        </Link>
      </nav>
    )
  }
}
