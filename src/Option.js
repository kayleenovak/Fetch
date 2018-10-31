import React, { Component } from 'react';
import './App.scss';

export default class Option extends Component {
  render() {
    return (
      <option id='breed' value={this.props.currentBreed}>{this.props.currentBreed}</option>
      // <button></button>
    )
  }
}