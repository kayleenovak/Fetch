import React, { Component } from 'react';
import './Splash.css'

export default class Splash extends Component {
  render() {
    return (
      <div>
        <img className='splash-logo logo' />        
          <div className='splash-cont'>
          <form>
            <div className="switch">
              <input className='radios' type="radio" name="choose1" id='male' value="Male" />
              <input className='radios' type="radio" name="choose1" value="both" defaultChecked />
              <input className='radios' type="radio" name="choose1" value="Female" />
            </div>
          </form>
          <form>
            <div className="switch">
              <input className='radios' type="radio" name="choose2" value="Puppy" />
              <input className='radios' type="radio" name="choose2" value="both" defaultChecked />
              <input className='radios' type="radio" name="choose2" value="Adult" />
            </div>
          </form>
          <form>
            <div className="switch">
              <input className='radios' type="radio" name="choose3" value="Big" />
              <input className='radios' type="radio" name="choose3" value="both" defaultChecked />
              <input className='radios' type="radio" name="choose3" value="Small" />
            </div>
          </form>
          </div>
          <button>Fetch Dogs</button>        
        <button>Show all dogs</button>
      </div>
    )
  }
}

