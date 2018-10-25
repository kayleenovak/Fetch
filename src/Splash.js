import React, { Component } from 'react';
import './Splash.css';

export default class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <h1 className='splash-title'>Fetch <i className="fas fa-dog"></i> </h1>
        <form>
          <button className='fetch-dogs-btn'>Fetch Dogs</button>
        </form>
        <button className='show-all-dogs-btn'>Show all dogs</button>
      </div>
    )
  }
}

