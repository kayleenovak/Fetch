import React, { Component } from 'react';

export default class CardDescription extends Component {
  render() {
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