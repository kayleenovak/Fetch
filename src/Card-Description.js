import React, { Component } from 'react';

export default class CardDescription extends Component {
  render() {
    console.log('card desc', this.props);
    return (
      <div className="card-desc">
        <p>{this.props.description.name}</p>
        <p>Age:{this.props.description.age}</p>
        <p>Sex:{this.props.description.gender}</p>
        <p>Breed:{this.props.description.breed}</p>
        

      </div>
    )
  }
}