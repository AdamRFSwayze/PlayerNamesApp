import React, { Component } from 'react';
import './App.css';
import MyButton from './myButton.js';
import MyTable from './myTable.js';


var playerData = require('./data.json');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myWords : []
    }
    this.addToState = this.addToState.bind(this);
  }


  addToState(position, name){
    if (Object.keys(playerData.data).includes(name)){
      var newList = this.state.myWords.concat([
        [playerData.data[name].Position, playerData.data[name].name, playerData.data[name].BA, playerData.data[name].HR,
        playerData.data[name].Age, playerData.data[name].WAR]])

      this.setState({ myWords : newList})
      console.log(Object.keys(playerData.data))
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
