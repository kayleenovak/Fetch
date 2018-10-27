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
    event.target.previousSibling.classList.add('expanded-card');
    event.target.parentElement.classList.add('expanded-card');
  }

  render() {
    const showInfo = this.state.showInfo;
    let icon;
    icon = showInfo ? ' - ' : ' + ';

  return (
    <div className="card">
      <img src={this.props.dog.img} className="dog-img" />
      <CardDescription description={this.props.dog} toggleInfo={this.toggleInfo} />
      <div onClick={this.toggleInfo}>
        {icon}
      </div>
    </div>
    )
  }
}
        // <p>{showInfo ? this.props.dog.weight: null}</p>