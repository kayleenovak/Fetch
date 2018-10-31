import React, { Component } from 'react';
import Card from './Card';
import './App.scss';

import cardContainerStyle from './Card-Container.css';


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