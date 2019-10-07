import React, { Component } from 'react';
import UserCard from './components/UserCard'
import Input from './components/Input'
import axios from 'axios'
import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state={
      user:'divbyseptember',
      data:[],
      followers: []
    }
  }
  componentDidMount() {
    this.getUserData()
  }

  getUserData = (name) => {
    this.setState({
      user: name
    })
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
    

    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    .then(result => {
      this.setState({
        followers:result.data
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
        <UserCard userData={this.state.data} followers={this.state.followers}/>
        <Input getData={this.getUserData} />
      </div>
    );
  }
}

export default App;