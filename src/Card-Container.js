import React, { Component } from 'react';
import Card from './Card';
import './main.scss';


export default class CardContainer extends Component {
  render() {
    return (
      <div className='display-none card-container-selector'> 
        {this.props.dogs.map((dog, index) => {
          return <Card key={index} dog={dog} rescues={this.props.rescues} />
        })}
      </div>
    )
  }
}