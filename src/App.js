import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}
