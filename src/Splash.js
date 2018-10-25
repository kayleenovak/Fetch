import React, { Component } from 'react';
import './Splash.css';
import './App.css';

export default class Splash extends Component {

  displayMainPage = (event) => {
    event.preventDefault();
    let splashPage = document.querySelector('.splash')
    let displayNone = document.querySelectorAll('.display-none')
    splashPage.classList.remove('splash')
    splashPage.classList.add('display-none')
    displayNone.forEach(element => {
      element.classList.remove('displayNone')
      element.classList.add('display-block')
    })
  }

  render() {
    return (
      <div className="splash">
        <h1 className='splash-title'>Fetch <i className="fas fa-dog"></i> </h1>
        <form>
          <button className='fetch-dogs-btn'>Fetch Dogs</button>
        </form>
        <button onClick={this.displayMainPage} className='show-all-dogs-btn'>Show all dogs</button>
      </div>
    )
  }
}

