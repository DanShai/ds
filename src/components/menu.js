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
    this.autotimeout = null
    this.start = null
    this._isMounted = false
  }

  componentDidMount() {
    this._isMounted = true
    window.addEventListener('scroll', () => this.handlescroll())
  }

  componentWillUnmount() {
    this._isMounted = false
    window.removeEventListener('scroll', () => this.handlescroll())
    clearTimeout(this.autotimeout)
  }

  hidemenu() {
    this.scrolly = this.curscrolly
    if (this._isMounted) {
      this.setState({
        showmenu: false,
        count: 0,
        open: false,
      })
    }
    console.log('in hide', JSON.stringify(this.state))
    this.start = null
  }

  btnClicked() {
    if (this._isMounted) {
      this.setState({
        open: !this.state.open,
        count: this.state.count + 1,
      })
    }
    console.log('in btn', JSON.stringify(this.state))
    if (this.state.count > 1) {
      this.hidemenu()
    }
  }

  autoclose() {
    if (
      this.state.count == 0 &&
      this.state.showmenu == true &&
      this.state.open == false
    ) {
      const now = new Date().getSeconds()
      if (this.start !== null && now - this.start > 5) {
        console.log(this.start, now)
        console.log('in auto', JSON.stringify(this.state))
        this.hidemenu()
      }
    }
  }

  handlescroll() {
    this.curscrolly = window.scrollY
    if (this.scrolly !== this.curscrolly) {
      if (this._isMounted) {
        this.setState({
          showmenu: true,
        })
      }
      this.scrolly = this.curscrolly
    }
    this.start = new Date().getSeconds()
    this.autotimeout = setTimeout(() => {
      this.autoclose()
    }, 7000)
  }

  render() {
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
