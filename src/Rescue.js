import React, { Component } from 'react';
import CardDescription from './Card';
import RescueStyle from './Rescue.css';

export default class Rescue extends Component {
  render() {
    return (
      <div className='rescue'>
        <p>{this.props.matchedRescue.name}</p>
      </div>
    )
  }
}