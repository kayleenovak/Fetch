import React, { Component } from 'react';

import './Filter.css'
import './App.css';


export default class Filter extends Component {
toggleModal = (event) => {
  event.target.parentElement.parentElement.classList.toggle('toggled-modal')
}
  render() {
    return (
      <div>
        <div className='sidebar breed-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal}>
            <p className='caret'>Breed</p>
          </div>
          <h3 className='modal-title'>PLACE FILTER TITLE HERE</h3>
          <p className='modal-body'> THIS IS WHERE CHECKBOXES AND RADIO BUTTONS SHOULD GO </p>
        </div>      
        <div className='sidebar gender-sb'>
          <div className='caret-wrapper' onClick={this.toggleModal}>
            <p className='caret'>Gender</p>
          </div>
          <h3 className='modal-title'>PLACE FILTER TITLE HERE</h3>
          <p className='modal-body'> THIS IS WHERE CHECKBOXES AND RADIO BUTTONS SHOULD GO </p> 
          <div className='sidebar size-sb'>
            <div className='caret-wrapper' onClick={this.toggleModal}>
              <p className='caret'>Size</p>
            </div>
            <h3 className='modal-title'>PLACE FILTER TITLE HERE</h3>
            <p className='modal-body'> THIS IS WHERE CHECKBOXES AND RADIO BUTTONS SHOULD GO </p>
          </div>
        </div>
      </div>
    )
  }
}