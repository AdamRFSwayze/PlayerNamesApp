import React from 'react';


class MyTable extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div class="container" id="TableContainer" align="center">
        <table id="MrTable" className="table">
        <tbody>
          <tr>
            <th>Position</th>
            <th>Player</th>
            <th>Batting Average</th>
            <th>Home Runs</th>
            <th>Age</th>
          </tr>
          { this.props.wordList.map( (word, index) =>
          <tr key= {index}>
            {word.map((stats, index)=>
            <td key={index}> {stats} </td>)}
          </tr>
            )
          }
          </tbody>
        </table>
      </div>
    )

  }



}


export default MyTable
