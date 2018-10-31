import React, { Component } from 'react';
import './App.css';
import SearchStyle from './Search.css';
import Trie from '@kaynovak/autocomplete';

export default class Search extends Component {

  // instantiate a new tree
  // populate it with whatever data a user can search for
  // On change of a type we will take that value on change and should be calling tree.suggest(prefix)
  // The suggest method will return an array
  // Save the suggestions as a state in order to trigger the rerender
  // When the user clicks on the suggestion, it should autopopulate into the search bar
  // The suggestions should be some sort of HTML structure
  

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

