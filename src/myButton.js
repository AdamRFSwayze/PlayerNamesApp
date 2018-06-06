import React from 'react';


const positions = ['First Base', 'Second Base', 'Short Stop', 'Thirdbase', 'Right Field', 'Center Field', 'Left Field', 'Catcher'];

class MyButton extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.myText.value !== ''){
      this.props.addWord(this.select.value, this.myText.value);
      document.getElementById("myTextToAdd").value = null;
    } else {
      alert('No PLayer Picked')
    }

  }



  render(){
    return (
      <form onSubmit = {this.handleSubmit} autoComplete="off">

        <select className="form-control" id="mySelect" ref={select => { this.select = select }}>
          {positions.map( (position) =>
          <option> {position} </option>
            )
          }
        </select>

        <input id="myTextToAdd" type="text" ref={myText => { this.myText = myText }}/>
        <input type="Submit" value="Click to Add" />
      </form>
    )
  }
}

export default MyButton;
