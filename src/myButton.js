import React from 'react';


const positions = ['First Base', 'Second Base', 'Short Stop', 'Thirdbase'];

class MyButton extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if (document.getElementById("myTextToAdd").value !== ''){
      this.props.addWord(document.getElementById("mySelect").value, document.getElementById("myTextToAdd").value);
      document.getElementById("myTextToAdd").value = null;
    } else {
      alert('No PLayer Picked')
    }

  }



  render(){
    return (
      <form onSubmit = {this.handleSubmit} autoComplete="off">

        <select className="form-control" id="mySelect">
          {positions.map( (position) =>
          <option> {position} </option>
            )
          }
        </select>

        <input id="myTextToAdd" type="text"/>
        <input type="Submit" value="Click to Add" />
      </form>
    )
  }
}

export default MyButton;
