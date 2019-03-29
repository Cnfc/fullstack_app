import React, { Component } from 'react';
// import Link
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className='App-logo' alt="logo"></img>
          <h2>Hi there</h2>
        </div>
        <p className='App-intro'> 
          To Get started, edit<code>src/App.js</code>
        </p>
        <a href="http://localhost:5000/auth/google" >Sing in with Google</a>
        <a href="http://localhost:5000/api/logout">Logout</a>
        <a href="http://localhost:5000/api/current_user">Check</a>
      </div>
    );
  }
}

export default App;
