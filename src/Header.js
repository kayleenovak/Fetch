import React, { Component } from 'react';
import './Header.css'
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className='display-none'>
        <h1 className='title'>
          Fetch <i className="fas fa-dog"></i>
        </h1>

      </header>
    )
  }
}

export default Header;