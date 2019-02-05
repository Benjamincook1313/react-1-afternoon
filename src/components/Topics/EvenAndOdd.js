import React, {Component} from 'react';

class EvenAndOdd extends Component{

    Constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
}
    handleUpdateUserInput(value){
        this.State({
            userInput: value
        })
    }
    handleUpdateEvenAndOdd(value){
        for(let i=0; i<evenArray.length; i++){
            if(evenArray[i] % 2 === 0){
                evenArray.push(evenArray[i])
            }
         } else {
            oddArray.push(evenArray[i])
        }
    }
        
    

    render(){
        return (
            <div className='puzzleBox EvenAndOdd'>
              <h4>'Evens and Odds'</h4>
              <input className='resultsBox' onChange= {(e) => this.handleUpdateUserInput(e.target.value)}
              value={this.state.result}/> 
              <button className='confirmationButton' onClick={() => this.handleUpdateEvenAndOdd()}>Solve Toy</button>
              <span className='resultsBox'></span>
              <span className='resultsbox'></span>
            </div>
        )
    }


export default EvenAndOdd