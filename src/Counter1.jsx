import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(){
    super()
    this.state={count:0}
  }

  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }

  handleDecrement=()=>{
    this.setState({count:this.state.count-1})
  }
  handleReset=()=>{
    this.setState({count:0})
  }
  render() {
    return (
      <div className="MainDiv">
        <h1>{this.state.count}</h1>
          <div class="BtnDiv">
          <button onClick={this.handleIncrement}>+ Increment</button>
          <button onClick={this.handleDecrement}>- Decrement</button>
          <button onClick={this. handleReset}>Reset</button>
          </div>
      </div>
    )
  }
}
