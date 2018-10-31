import React, { Component } from 'react';
import './main.scss';


class Header extends Component {
  render() {
    return (
      <header>
        <h1 className='title'>
          Fetch <i className="fas fa-dog"></i>
        </h1>

      </header>
    );
  }
}

export default Header;