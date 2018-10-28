import React, { Component } from 'react';

import FilterStyle from './Filter.css';
import AppStyle from './App.css';
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
    this.state.dogArray = this.props.allDogs(this.props.adoptableDogs)
    this.state.dogArray.forEach((currentDog) => {
      if (!this.state.uniqueBreedsArray.includes(currentDog.breed)) {
        this.state.uniqueBreedsArray.push(currentDog.breed);
      };
    });
    let sortedArray = this.state.uniqueBreedsArray.sort();
    this.setState({uniqueBreedsArray: sortedArray});
  }



    // event.preventDefault()
    // this.getCheckedRadios()
    // let dogs = this.allDogs(this.state.adoptableDogs);
    // let sizeCheckbox = this.state.checkedBoxes[2].id.toLowerCase()
    // let filteredDogs = dogs.filter(dog => {
    //   let dogSize = dog.size.toLowerCase()
    //   if(this.state.checkedBoxes[0].id.includes(dog.gender) && sizeCheckbox.includes(dogSize)) {
    //     return dog
    //   }
    // })
    // this.setState(
    //   {
    //     filteredDogs: filteredDogs
    //   } 
    // )
  

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
                console.log('current breed:', currentBreed);
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
          <p className='modal-body'> THIS IS WHERE CHECKBOXES AND RADIO BUTTONS SHOULD GO </p>
        </div>
        <div className='sidebar size-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal}>
            <p className='caret'>Size</p>
          </div>
          <p className='modal-body'> THIS IS WHERE CHECKBOXES AND RADIO BUTTONS SHOULD GO </p>
        </div>
        <div className='sidebar age-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal}>
            <p className='caret'>Size</p>
          </div>
          <p className='modal-body'> THIS IS WHERE CHECKBOXES AND RADIO BUTTONS SHOULD GO </p>
        </div>
        <div className='sidebar house-trained-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal}>
            <p className='caret'>Size</p>
          </div>
          <p className='modal-body'> THIS IS WHERE CHECKBOXES AND RADIO BUTTONS SHOULD GO </p>
        </div>
      </div>
    )
  }
}