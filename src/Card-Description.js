import React, { Component } from 'react';
import './Card-Description.scss';

export default class CardDescription extends Component {
  constructor() {
    super();
    this.state = {
      displayDescription: true,
      currentRescue: []
    };
  }

  toggleRescue = (event) => {
    this.filterRescue();
    this.setState({
      displayDescription: !this.state.displayDescription
    });
  }

  filterRescue = () => {
    let matchedRescue = this.props.rescues.find((currentRescue) => {
      return this.props.description.rescue.toLowerCase() === currentRescue.name.toLowerCase();
    });

    this.state.currentRescue.push(matchedRescue);
  }

  toggleDisplayRescue = () => {
    this.setState({
      displayDescription: !this.state.displayDescription
    });
  }


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
              <button className='card-desc-btn' onClick={ this.toggleRescue }>Rescue Me</button>
            </div>
          ) : 
          (<div className='contact-rescue' onClick={ this.toggleDisplayRescue }>
            <p>Please contact the rescue below for adoption application and information:</p>
            <p className="top-p">{this.state.currentRescue[0].name}</p>
            <table className='contact-table'>
              <tr>
                <td className='table-content left-column'><i className="fas fa-phone"></i></td>
                <td className='rescue-info table-content'>{this.state.currentRescue[0].Phone}</td>
              </tr>
              <tr>
                <td className='table-content left-column'><i className="fas fa-map-marker-alt"></i></td>
                <td className='table-content rescue-info'>{this.state.currentRescue[0].Location}</td>
              </tr>
              <tr>
                <td className='table-content left-column'><i className="fas fa-envelope"></i></td>
                <td className='rescue-info table-content'><a className='rescue-info' href='mailto:/{this.state.currentRescue[0].Email}/'>{this.state.currentRescue[0].Email}</a></td>
              </tr>
              <tr>
                <td className='table-content left-column'><i className="fas fa-globe-americas"></i></td>
                <td className='rescue-info table-content'><a className='rescue-info'  href={this.state.currentRescue[0].Webiste}>{this.state.currentRescue[0].Webiste}</a></td>
              </tr>
            </table>
          </div>)
        }
      </div>
    );
  }
}