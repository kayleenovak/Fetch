import React, { Component } from 'react';
import './App.css';
import SearchStyle from './Search.css';
import Trie from '@kaynovak/autocomplete';
import Suggestion from './Suggestion.js'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      dogNames: [],
      prefixTrie: [],
      suggestions: []
    }
  }

  // instantiate a new tree
  // populate it with whatever data a user can search for
  // On change of a type we will take that value on change and should be calling tree.suggest(prefix)
  // The suggest method will return an array
  // Save the suggestions as a state in order to trigger the rerender
  // When the user clicks on the suggestion, it should autopopulate into the search bar
  // The suggestions should be some sort of HTML structure
  // npm update - change to lowercase in traversedown - tolowercase before the split
  setAutoCompleteData = (event) => {
    let allDogNames = this.props.unfilteredDogs.map(dog => {
      return dog.name
    })
    let newTrie = new Trie();
    allDogNames.forEach(name => {
      newTrie.insert(name)
    })
    this.state.dogNames = allDogNames;
    this.state.prefixTrie = newTrie;
  }
  
  autoComplete = (event) => {
    let prefix = event.target.value
    let suggestions = this.state.prefixTrie.suggest(prefix)
    this.setState({
      suggestions: suggestions
    })  
  }

  render() {
    return (
      <div className="search-div">
        <input placeholder="Search by name..." type='search' className='search-bar' onClick={ this.setAutoCompleteData } onChange={ this.autoComplete }/>
        { this.state.suggestions.map(suggestion => {
          return <Suggestion suggestion={ suggestion } />
        })

        }
        <button onClick={ this.props.searchFilter }>Search</button>
        <button onClick={ this.props.resetDogs }>Show All Dogs</button>
      </div>
    )
  }
}

