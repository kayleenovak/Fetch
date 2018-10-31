import React, { Component } from 'react';
import Trie from '@kaynovak/autocomplete';
import Suggestion from './Suggestion.js';
import './main.scss';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      dogNames: [],
      prefixTrie: [],
      suggestions: []
    };
  }

  setAutoCompleteData = (event) => {
    let allDogNames = this.props.unfilteredDogs.map(dog => {
      return dog.name;
    });
    let newTrie = new Trie();

    allDogNames.forEach(name => {
      newTrie.insert(name);
    });
    this.state.dogNames = allDogNames;
    this.state.prefixTrie = newTrie;
  }
  
  autoComplete = (event) => {
    let prefix = event.target.value;
    let suggestions = this.state.prefixTrie.suggest(prefix);

    this.setState({
      suggestions
    });  
  }

  render() {
    return (
      <div className="search-div">
        <input placeholder="Search by name..." type='search' className='search-bar' onClick={ this.setAutoCompleteData } onChange={ this.autoComplete }/>
        { this.state.suggestions.map(suggestion => {
          return <Suggestion suggestion={ suggestion } />;
        })

        }
        <button onClick={ this.props.searchFilter }>Search</button>
        <button onClick={ this.props.resetDogs }>Show All Dogs</button>
      </div>
    );
  }
}

