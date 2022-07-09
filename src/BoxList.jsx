import React, { Component } from 'react'

import Box from './Box'
import NewBoxForm from './NewBoxForm'

export default class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: [],
    }
    this.createBox = this.createBox.bind(this)
    this.deleteBox = this.deleteBox.bind(this)
  }

  createBox(box) {
    this.setState({ boxes: [...this.state.boxes, box] })
  }

  deleteBox(box) {
    this.setState({
      boxes: this.state.boxes.filter((item) => item.id !== box.id),
    })
  }

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.colour}
        deleteBox={this.deleteBox}
      />
    ))

    return (
      <div className="flex flex-col min-h-screen justify-between items-center p-24">
        <div className="flex flex-row flex-wrap items-center gap-4 mb-24">
          {boxes}
        </div>
        <NewBoxForm createBox={this.createBox} />
      </div>
    )
  }
}
