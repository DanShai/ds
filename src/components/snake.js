import React, { Component } from 'react'

export default class sgame extends Component {
  constructor(props) {
    super(props)
    this._timeout = null
    this._canvas = null
    this._isMounted = false
    this._init()
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', e => this.handleKeys(e))
    clearTimeout(this._timeout)
    this._isMounted = false
  }

  componentDidMount() {
    window.addEventListener('keydown', e => this.handleKeys(e))
    this._canvas = this.refs.canvas
    this._isMounted = true
    clearTimeout(this._timeout)
    this._timeout = setInterval(() => this.draw(), 1000)
  }

  _init() {
    this._snake = [{ x: 0, y: 0 }]
    this._snakeW = 20
    this._snakeH = 20
    this._food = { x: 80, y: 80 }
    this._velocity = { x: 0, y: 0 }
    clearTimeout(this._timeout)
    this._timeout = setInterval(() => this.draw(), 1000)
  }
  move() {
    const sw = this._snakeW
    const sh = this._snakeH
    const v = this._velocity
    const len = this._snake.length
    const last = this._snake[len - 1]
    let head = { ...last }
    this._snake.shift()
    head.x += v.x * sw
    head.y += v.y * sh
    this._snake.push(head)
  }

  isDead() {
    const sw = this._snakeW
    const sh = this._snakeH
    const w = this.props.width
    const h = this.props.height
    const len = this._snake.length
    const last = this._snake[len - 1]
    let head = { ...last }
    if (head.x + sw > w || head.x < 0 || head.y + sh > h || head.y < 0) {
      return true
    }

    for (let el of this._snake.slice(0, len - 2)) {
      if (head.x == el.x && head.y == el.y) {
        return true
      }
    }

    return false
  }

  isEaten() {
    const len = this._snake.length
    const last = this._snake[len - 1]
    const head = { ...last }
    if (head.x == this._food.x && head.y == this._food.y) {
      return true
    }
    return false
  }

  randomizeFood() {
    const sw = this._snakeW
    const sh = this._snakeH
    const w = this.props.width
    const h = this.props.height
    const fx = Math.floor(Math.random() * w)
    const fy = Math.floor(Math.random() * h)
    this._food.x = fx < sw ? fx * sw : fx - (fx % sw)
    this._food.y = fy < sh ? fy * sh : fy - (fy % sh)
  }

  getfat() {
    const len = this._snake.length
    const last = this._snake[len - 1]
    let head = { ...last }
    this._snake.push(head)
  }

  draw() {
    if (this._isMounted) {
      const ctx = this._canvas.getContext('2d')
      const w = this.props.width
      const h = this.props.height
      const sw = this._snakeW
      const sh = this._snakeH
      const v = this._velocity

      ctx.fillStyle = '#454545'
      ctx.fillRect(0, 0, w, h)

      this.move()
      ctx.fillStyle = '#fc913a'
      for (let p of this._snake) {
        ctx.fillRect(p.x, p.y, sw, sh)
      }

      ctx.fillStyle = '#56ac88'
      ctx.fillRect(this._food.x, this._food.y, sw, sh)

      if (this.isEaten()) {
        this.getfat()
        this.randomizeFood(w, h)
      }

      if (this.isDead()) {
        clearTimeout(this._timeout)
        ctx.fillStyle = '#669ae1'
        ctx.fillRect(0, 0, w, h)
        //ctx.font = '30px Arial'
        ctx.font = '30px Comic Sans MS'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.fillText('Game Over', w / 2, h / 2)
      }
    }
  }
  handleKeys(e) {
    e.preventDefault()
    const key = e.keyCode
    switch (key) {
      case 32:
        this._init()
        break
      case 37:
        this._velocity = { x: -1, y: 0 }
        break
      case 38:
        this._velocity = { x: 0, y: -1 }
        break
      case 39:
        this._velocity = { x: 1, y: 0 }
        break
      case 40:
        this._velocity = { x: 0, y: 1 }
        break
      default:
        break
    }
  }
  render() {
    return (
      <canvas
        className="box boxshadow"
        ref="canvas"
        width={this.props.width}
        height={this.props.height}
      />
    )
  }
}
