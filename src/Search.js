import React, { Component } from 'react';
import './App.css';
import SearchStyle from './Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className="search-div">
        <input placeholder="Search by name..." type='search' className='search-bar' />
        <button onClick={ this.props.searchFilter }>Search</button>
        <button onClick={ this.props.resetDogs }>Show All Dogs</button>
      </div>
    )
  }
}

