import React, { Component } from 'react';
import Card from './Card';

export default class CardContainer extends Component {
  render() {
      const dogs = Object.keys(this.props.dogs).reduce((acc, key) => {
        this.props.dogs[key].forEach((dog, index) => {
        acc.push(dog)
        })
      return acc
      }, [])
    return (
      <div className='card-container'> 
        {dogs.map((dog, index) => {
          return <Card key={index} dog={dog} />
        })}
      </div>
    )
  }
}