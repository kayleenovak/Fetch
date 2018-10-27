import React, { Component } from 'react';
import CardDescription from './Card-Description';
import CardStyle from './Card.css';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {showInfo: false}
  }

  toggleInfo = (event) => {
    this.setState({showInfo: !this.state.showInfo});
    event.target.previousSibling.classList.toggle('expanded-description');
    event.target.previousSibling.previousSibling.classList.toggle('expanded-img');
    event.target.parentElement.classList.toggle('expanded-card');
  }

  render() {
    const showInfo = this.state.showInfo;
    let icon;
    icon = showInfo ? ' - ' : ' + ';

  return (
    <div className="card">
      <img src={this.props.dog.img} className="dog-img" />
      <CardDescription description={this.props.dog} toggleInfo={this.toggleInfo} 
        rescues={this.props.rescues} />
      <div onClick={this.toggleInfo} className= 'icon'>
        {icon}
      </div>
    </div>
    )
  }
}
        // <p>{showInfo ? this.props.dog.weight: null}</p>