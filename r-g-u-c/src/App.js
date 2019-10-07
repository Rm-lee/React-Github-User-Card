import React, { Component } from 'react';
import UserCard from './components/UserCard'
import axios from 'axios'
import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state={
      user:'rmlee',
      data:[]
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(result => {
      this.setState({
        data: result.data
      })
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })

  }
  render() {
    return (
      <div>
        <UserCard userData={this.state.data}/>
      </div>
    );
  }
}

export default App;