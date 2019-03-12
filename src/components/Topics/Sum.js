import React, { Component } from 'react'

class Sum extends Component {
  constructor(){
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handle1stChange(val){
    this.setState({
      number1: parseInt(val, 10)
    })
  }
  handle2ndChange(val){
    this.setState({
      number2: parseInt(val, 10)
    })
  }

  calcSum(num1, num2){
    this.setState({
      sum: num1 + num2
    })
  }

  render () {
    return (
      <div className='puzzleBox sumPB'>
        <h4>sum</h4>
        <input className='inputLine' onChange={(e) => {this.handle1stChange(e.target.value)}}></input>
        <input className='inputLine' onChange={(e) => this.handle2ndChange(e.target.value)}></input>
        <button className='confirmationButton' onClick={() => this.calcSum(this.state.number1, this.state.number2)}>Get Sum</button>
        <span className='resultsBox'>Sum: {this.state.sum}</span>
      </div>
    )
  }
}
export default Sum