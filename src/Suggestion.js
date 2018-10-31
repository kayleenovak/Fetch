import React, { Component } from 'react';
import './Suggestion.scss';

export default class Suggestion extends Component {

render() {
  return(
    <div className='suggestion' value={ this.props.suggestion } onClick={ this.props.autoPopulateSearch }>{ this.props.suggestion }</div>
    )
}
}