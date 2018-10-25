import React, { Component } from 'react';

import './Splash.css'
import './App.css';

export default class Splash extends Component {

  displayMainPage = (event) => {
    event.preventDefault();
    let splashPage = document.querySelector('.splash')
    let cardContainer = document.querySelector('.card-container-selector')
    splashPage.classList.remove('splash')
    splashPage.classList.add('display-none')
    cardContainer.classList.remove('display-none')
    cardContainer.classList.add('card-container')

  }

  render() {
    return (
      <div className="splash">
        <h1 className='splash-title'>Fetch <i className="fas fa-dog"></i> </h1>
        <form>
            <div className="switch">
              <input className='radios' type="radio" name="choose1" id='male' value="Male" />
              <input className='radios' type="radio" name="choose1" value="both" defaultChecked />
              <input className='radios' type="radio" name="choose1" value="Female" />
            </div>
          </form>
          <form>
            <div className="switch">
              <input className='radios' type="radio" name="choose2" value="Puppy" />
              <input className='radios' type="radio" name="choose2" value="both" defaultChecked />
              <input className='radios' type="radio" name="choose2" value="Adult" />
            </div>
          </form>
          <form>
            <div className="switch">
              <input className='radios' type="radio" name="choose3" value="Big" />
              <input className='radios' type="radio" name="choose3" value="both" defaultChecked />
              <input className='radios' type="radio" name="choose3" value="Small" />
            </div>
          <button className='fetch-dogs-btn' onClick={ this.props.filterDogs }>Fetch Dogs</button>
        </form>
        <button onClick={this.displayMainPage} className='show-all-dogs-btn'>Show all dogs</button>
      </div>
    )
  }
}

