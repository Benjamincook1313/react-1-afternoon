import React, { Component } from 'react'

class FilterString extends Component {
  constructor(){
    super()
      this.state = {
        names: ['Chris', 'Laura', 'Nathan', 'Benjamin'],
        userInput: '',
        filteredNames: []
      }
  }
  handleChange(val){
    this.setState({
      userInput: val
    })
  }
  filterNames(userInput){
    let names = this.state.names
    let filteredNames = names.filter(val => val.includes(userInput.toUpperCase()))

    names.includes(userInput)
    
  
    this.setState({
      filteredNames
    })
  }
  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter Names</h4>
        <span className='puzzleText'>Names: { JSON.stringify(this.state.names, null, 10) }</span>
        <input className='inputLine' onChange={ (e) => {this.handleChange(e.target.value)} }></input>
        <button className='confirmationButton' onClick={ () => this.filterNames(this.state.userInput) }>Filter</button>
        <span className='resultsBox filterStringRB'>Filter Names: { JSON.stringify(this.state.filteredNames) }</span>
      </div>
    )
  }
}

export default FilterString