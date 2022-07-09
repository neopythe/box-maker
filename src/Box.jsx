import React, { Component } from 'react'

export default class Box extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { width, height, color, id } = this.props
    this.props.deleteBox({ width, height, color, id })
  }

  render() {
    const { width, height, color } = this.props
    const styles = {
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: color,
    }

    // tailwind doesn't play nicely with template literals:
    // const classNames = `w-[${boxWidth}px] h-[${boxHeight}px] bg-[${boxColour}]`

    return (
      <div className="flex flex-col gap-2">
        <div style={styles}></div>
        <button onClick={this.handleClick}>x</button>
      </div>
    )
  }
}
