import React, { Component } from 'react';

import FilterStyle from './Filter.css';
import AppStyle from './App.scss';
import Option from './Option.js';


export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      dogArray: null,
      uniqueBreedsArray: [],

    }
  }

  toggleModal = (event) => {
    this.generateUniqueOptions();
    event.target.parentElement.parentElement.classList.toggle('toggled-modal')
  }

  generateUniqueOptions = () => {
    this.state.dogArray = this.props.unfilteredDogs
    this.state.dogArray.forEach((currentDog) => {
      if (!this.state.uniqueBreedsArray.includes(currentDog.breed)) {
        this.state.uniqueBreedsArray.push(currentDog.breed);
      };
    });
    let sortedArray = this.state.uniqueBreedsArray.sort();
    this.setState({uniqueBreedsArray: sortedArray});
  }


  
  render() {
    return (
      <div>
        <div className='sidebar breed-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal} >
            <p className='caret'>Breed</p>
          </div>
          <select>
            {
              this.state.uniqueBreedsArray.map((currentBreed) => {
                return <Option currentBreed={currentBreed} />
              })
            }
          </select>
          <button onClick={ this.props.filterBreed}>enter</button>
        </div>      
        <div className='sidebar gender-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal}>
            <p className='caret'>Gender</p>
          </div>
          <button className='gender-btn modal-btn' onClick={this.props.filterGender}>Male</button>
          <button className='gender-btn modal-btn' onClick={this.props.filterGender}>Female</button>
        </div>
        <div className='sidebar size-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal}>
            <p className='caret'>Size</p>
          </div>
          <button className='size-btn modal-btn' onClick={this.props.filterSize}>Small</button>
          <button className='size-btn modal-btn' onClick={this.props.filterSize}>Medium</button>
          <button className='size-btn modal-btn' onClick={this.props.filterSize}>Large</button>
        </div>
        <div className='sidebar age-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal}>
            <p className='caret'>Age</p>
          </div>
          <button className='age-btn modal-btn' onClick={this.props.filterAge}>puppy</button>
          <button className='age-btn modal-btn' onClick={this.props.filterAge}>young</button>
          <button className='age-btn modal-btn' onClick={this.props.filterAge}>adult</button>
          <button className='age-btn modal-btn' onClick={this.props.filterAge}>senior</button>        
        </div>
        <div className='sidebar other-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal}>
            <p className='caret'>Other</p>
          </div>
          <button className='other-btn modal-btn' onClick={this.props.filterPure}>Mixed Breed</button>
          <button className='other-btn modal-btn' onClick={this.props.filterPure}>Purebred</button>
          <button className='other-btn modal-btn' onClick={this.props.filterTrained}>House Trained</button>      
        </div>
      </div>
    )
  }
}