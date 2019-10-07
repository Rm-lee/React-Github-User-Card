import React, { Component } from 'react';

class Input extends Component {
 constructor(){
  super()
  this.state={
   value:''
  }
 }
 changeHandler = e => {
  e.preventDefault();
  this.setState({
    value: e.target.value
  });
};  

submitHandler = e => {
 e.preventDefault()
 this.props.getData(this.state.value)
 console.log(this.state.value)
}
 render() {
  return (
   <form onSubmit={this.submitHandler}>
    <input 
    type="text"
    value={this.state.name}
    onChange={this.changeHandler}
    placeholder="Github User"
    name="user"/>
    <button>Get Details</button>
   </form>
  );
 }
}

export default Input;