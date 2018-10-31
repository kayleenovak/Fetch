import React, { Component } from 'react';
import './App.scss';
import SearchStyle from './Search.scss';
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
    if (suggestions.length > 39 || suggestions.length < 1) {
      this.setState({
        suggestions: []
      })  
    } else {
      this.setState({
        suggestions: suggestions
      })
    }  
  }

  autoPopulateSearch = (event) => {
    let name = event.target.innerText
    let searchBar = document.querySelector('.search-bar')
    searchBar.value = name
    this.setState({
        suggestions: []
      })  
  }

  render() {
    return (
      <div className="search-div">
        <input placeholder="Search by name..." type='search' className='search-bar' onClick={ this.setAutoCompleteData } onChange={ this.autoComplete }/>
        <div className='autocomplete-section'>
        { this.state.suggestions.map(suggestion => {
          return <Suggestion suggestion={ suggestion } autoPopulateSearch={ this.autoPopulateSearch }/>
        })
        }
        </div>
        <button onClick={ this.props.searchFilter }>Search</button>
        <button onClick={ this.props.resetDogs }>Show All Dogs</button>
      </div>
    )
  }
}

