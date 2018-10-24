import React, { Component } from 'react';
import CardDescription from './Card-Description';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.dog.img} />
        <CardDescription description={this.props.dog} />
      </div>
    )
  }
}