import React, { Component } from 'react';
import './App.css';
import MyButton from './myButton.js';
import MyTable from './myTable.js';

const knownPlayers = {
  'AaronJudge' : [3.30, 30, 25]
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myWords : [[null,null]]
    }
    this.addToState = this.addToState.bind(this);
  }


  addToState(position, name){
    if (name === 'AaronJudge'){
      var newList = this.state.myWords.concat([[position, name, knownPlayers.AaronJudge[0], knownPlayers.AaronJudge[1]]])
      this.setState({ myWords : newList})
    }
    console.log(this.state.myWords)
  }
  render() {
    return (
      <div className="App">
          <h1>  Word List </h1>
          <MyButton addWord = {this.addToState} />

          <MyTable wordList = {this.state.myWords} />


      </div>

    );
  }
}

export default App;
