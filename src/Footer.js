import React, { Component } from 'react';
import './App.css';
import './Footer.scss';


export default class Footer extends Component {
  render() {
    return (
      <footer>
        <h1>{this.props.filteredDogs.length > 0 ? null : 'Sorry No Results Found'}</h1>
      </footer>
    )
  }
}