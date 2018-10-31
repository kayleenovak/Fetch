import React, { Component } from 'react';
import './main.scss';

export default class Suggestion extends Component {

render() {
  return(
    <div>{this.props.suggestion}</div>
    )
  }
}