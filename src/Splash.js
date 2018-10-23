import React, { Component } from 'react';

export default class Splash extends Component {
  render() {
    return (
      <div>
        <img className='splash-logo logo' />
        <form>
          <div>
            <input type='checkbox' id='male' />
            <label for='male'>Male</label>
            <input type='checkbox' id='female' />
            <label for='female'>Female</label>
          </div>  
          <div>
            <input type='checkbox' id='male' />
            <label for='male'>Male</label>
            <input type='checkbox' id='female' />
            <label for='female'>Female</label>
          </div>
          <div>
            <input type='checkbox' id='male' />
            <label for='male'>Male</label>
            <input type='checkbox' id='female' />
            <label for='female'>Female</label>
          </div>
          <button>Fetch Dogs</button>
        </form>
        <button>Show all dogs</button>
      </div>
    )
  }
}

