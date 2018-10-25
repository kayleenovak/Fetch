import React, { Component } from 'react';
import Card from './Card';
import './App.css';

import cardContainerStyle from './Card-Container.css';


export default class CardContainer extends Component {
  render() {
      const dogs = Object.keys(this.props.dogs).reduce((acc, key) => {
        this.props.dogs[key].forEach((dog, index) => {
        acc.push(dog)
        })
      return acc
      }, [])
    return (
      <div className='display-none card-container-selector'> 
        {dogs.map((dog, index) => {
          return <Card key={index} dog={dog} />
        })}
      </div>
    )
  }
}