import React, { Component } from 'react';
import cardDescriptionStyle from './Card-Description.scss';
import Rescue from './Rescue.js';

export default class CardDescription extends Component {
  constructor() {
    super();
    this.state = {
      displayDescription: true,
      currentRescue: []
    }
  }

  toggleRescue = (event) => {
    this.filterRescue();
    this.setState({displayDescription: !this.state.displayDescription});
  }

  filterRescue = () => {
    let matchedRescue = this.props.rescues.find((currentRescue) => {
      return this.props.description.rescue.toLowerCase() === currentRescue.name.toLowerCase()
    })
    console.log('matchedRescue', matchedRescue);
    this.state.currentRescue.push(matchedRescue);
    // this.displayRescue(matchedRescue);
  }

  // displayRescue = (matchedRescue) => {

  //   return (
  //     <Rescue className='rescue' matchedRescue={matchedRescue} />
  //   }
  // }

  render() {
    const displayDescription = this.state.displayDescription;
    return (
      <div className="card-desc">
      {displayDescription ?
          (
        <div> 
          <p className="top-p">{this.props.description.name}</p>
          <p>{this.props.description.breed} {this.props.description.mix_breed ? null : 'Mix' }</p>
          <p>{typeof(this.props.description.age) === 'string' ? this.props.description.age : this.props.description.age + ' yrs'}</p>
          <p>{this.props.description.gender}</p>
          <p>Size: {this.props.description.size}</p>
          <p>{this.props.description.weight} lbs</p>
          <p>{this.props.description.house_trained ? 'House Trained' : 'Not House Trained'}</p>
          <p>{this.props.description.vaccinations ? 'Vaccinated' : 'Not Vaccinated'}</p>
          <p>Spayed/Neutered: {this.props.description.spayed_neutered ? 'Yes' : 'No'}</p>
          <button className='card-desc-btn' onClick={this.toggleRescue}>Rescue Me</button>
        </div>
          ) : 
        (<div>
          <p className="top-p">Please contact <span className='rescue-name'>{this.state.currentRescue[0].name}</span> to adopt {this.props.description.name}</p>
          <p className='rescue-info' >{this.state.currentRescue[0].Phone}</p>
          <p className='rescue-info' >{this.state.currentRescue[0].Location}</p>
          <a className='rescue-info'  href='mailto:/{this.state.currentRescue[0].Email}/'>{this.state.currentRescue[0].Email}</a>
          <a className='rescue-info'  href={this.state.currentRescue[0].Webiste}>{this.state.currentRescue[0].Webiste}</a>
        </div>)
        }
    </div>
    )
  }
}