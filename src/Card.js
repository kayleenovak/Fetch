import React, { Component } from 'react';
import CardDescription from './Card-Description';
import CardStyle from './Card.css';

export default class Card extends Component {
    render() {

    return (
      <div className="card">
        <img src={this.props.dog.img} className="dog-img" />
        <CardDescription description={this.props.dog} />
      </div>
    )
  }
}