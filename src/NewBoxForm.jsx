import React, { Component } from 'react'

import { v4 as uuidv4 } from 'uuid'

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '',
      height: '',
      colour: '#000',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const idBox = { ...this.state, id: uuidv4() }
    this.props.createBox(idBox)
    this.setState({ width: '', height: '' })
  }

  render() {
    return (
      <div className="card card-bordered">
        <form onSubmit={this.handleSubmit} className="card-body gap-6">
          <fieldset>
            <label htmlFor="width" className="mr-2">
              Width:
            </label>
            <input
              onChange={this.handleChange}
              type="number"
              name="width"
              id="width"
              min="1"
              value={this.state.width}
              className="input input-bordered"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="height" className="mr-2">
              Height:
            </label>
            <input
              onChange={this.handleChange}
              type="number"
              name="height"
              id="height"
              min="1"
              value={this.state.height}
              className="input input-bordered"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="colour" className="mr-2">
              Colour:
            </label>
            <input
              onChange={this.handleChange}
              type="color"
              name="colour"
              id="colour"
              value={this.state.colour}
              className="input h-6"
            />
          </fieldset>
          <button className="btn btn-success">Make a box</button>
        </form>
      </div>
    )
  }
}
