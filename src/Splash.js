import React, { Component } from 'react';

export default class Splash extends Component {
  render() {
    return (
      <div>
        <img className='splash-logo logo' />
        <form>
          <button>Fetch Dogs</button>
        </form>
        <button>Show all dogs</button>
      </div>
    )
  }
}

