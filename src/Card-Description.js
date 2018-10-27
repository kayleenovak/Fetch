import React, { Component } from 'react';
import cardDescriptionStyle from './Card-Description.scss';

export default class CardDescription extends Component {
  render() {
    return (
      <div className="card-desc">
        <p className="top-p">{this.props.description.name}</p>
        <p>Age: {this.props.description.age}</p>
        <p>Sex: {this.props.description.gender}</p>
        <p>Breed: {this.props.description.breed}</p>
        

      </div>
    )
  }
}