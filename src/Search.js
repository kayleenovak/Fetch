import React, { Component } from 'react';
import './App.css';

export default class Search extends Component {
  render() {
    return (
      <div>
        <input type='search' className='search-bar' />
        <button onClick={ this.props.searchFilter }>Search</button>
        <button onClick={ this.props.resetDogs }>Show All Dogs</button>
      </div>
    )
  }
}

