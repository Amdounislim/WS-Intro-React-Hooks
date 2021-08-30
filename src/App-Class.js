import React, { Component } from 'react'
import './App.css';

export default class AppClass extends Component {
  state = {
    counter: 0
  }


  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

