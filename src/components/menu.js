import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../assets/css/menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faPen } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showmenu: false,
      open: false,
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
        count: 0,
        open: false,
      })
      console.log('in hide', JSON.stringify(this.state))
    }, 100)
  }

  btnClicked() {
    this.hidetimeout = setTimeout(() => {
      this.setState({
        open: !this.state.open,
        count: this.state.count + 1,
      })
      console.log('in btn', JSON.stringify(this.state))
      if (this.state.count > 1) {
        this.hidemenu()
      }
    }, 100)
  }

  handlescroll() {
    this.curscrolly = window.scrollY
    if (this.scrolly !== this.curscrolly) {
      this.hidetimeout = setTimeout(() => {
        this.setState({
          showmenu: true,
        })
        this.scrolly = this.curscrolly
      }, 100)
    }
  }

  render() {
    // console.log(this.state.showmenu, this.scrolly)
    return (
      <nav className={`menu ${this.state.showmenu ? 'visible' : 'hidden'}`}>
        <div
          onClick={() => this.btnClicked()}
          className={`menu-btn ${this.state.open ? 'menu-btn-open' : ' '}`}
        >
          <span
            className={`lines ${this.state.open ? 'line-1-clicked' : 'line-1'}`}
          />
          <span
            className={`lines ${this.state.open ? 'line-2-clicked' : 'line-2'}`}
          />
          <span
            className={`lines ${this.state.open ? 'line-3-clicked' : 'line-3'}`}
          />
        </div>
        <Link
          onClick={() => this.hidemenu()}
          className="alink menu-item blue"
          to="/mnistpred"
        >
          <i className="icon">
            <FontAwesomeIcon icon={faCoffee} />
          </i>
        </Link>

        <a
          onClick={() => this.hidemenu()}
          href="https://github.com/DanShai"
          className="alink menu-item green"
        >
          <i className="icon">
            <FontAwesomeIcon icon={faGithub} />{' '}
          </i>
        </a>

        <Link
          onClick={() => this.hidemenu()}
          className="alink menu-item red"
          to="/"
        >
          <i className="icon">
            <FontAwesomeIcon icon={faHome} />
          </i>
        </Link>

        <Link
          onClick={() => this.hidemenu()}
          className="alink menu-item purple"
          to="/blog"
        >
          <i className="icon">
            <FontAwesomeIcon icon={faPen} />
          </i>
        </Link>
      </nav>
    )
  }
}
