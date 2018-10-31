import React, { Component } from 'react';
import CardDescription from './Card-Description';
import CardStyle from './Card.css';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false,
      showDescription: false
    }
  }

  toggleInfo = (event) => {
    this.setState({showInfo: !this.state.showInfo,
                  showDescription: !this.state.showDescription});
    event.target.previousSibling.classList.toggle('expanded-description');
    event.target.previousSibling.previousSibling.childNodes[0].classList.toggle('expanded-img');
    event.target.previousSibling.previousSibling.classList.toggle('img-overlay');
    event.target.parentElement.classList.toggle('expanded-card');
  }

  render() {
    const showInfo = this.state.showInfo;
    let icon;
    icon = showInfo ? ' - ' : ' + ';

  return (
    <div className="card">
      <div className="img-overlay">
        <img src={this.props.dog.img} className="dog-img" />
      </div>
      <CardDescription description={this.props.dog} toggleInfo={this.toggleInfo} 
        rescues={this.props.rescues} />
      <div onClick={this.toggleInfo} showDescription={this.state.showDescription} className='icon'>
        {icon}
      </div>
    </div>
    )
  }
}