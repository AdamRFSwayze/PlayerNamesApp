import React, { Component } from 'react';
import './App.css';
import MyButton from './myButton.js';
import MyTable from './myTable.js';

const knownPlayers = {
  'Judge' : ['Aaron Judge', .280, 30, 25, 8.1],
  'Betts' : ['Mookie Betts', .359, 17, 25, 4.2]
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myWords : []
    }
    this.addToState = this.addToState.bind(this);
  }


  addToState(position, name){
    if (Object.keys(knownPlayers).includes(name)){
      var newList = this.state.myWords.concat([[position, knownPlayers[name][0], knownPlayers[name][1], knownPlayers[name][2], knownPlayers[name][3], knownPlayers[name][4]]])
      this.setState({ myWords : newList})
    }
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
