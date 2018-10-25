import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Splash from './Splash';
import Filter from './Filter';
import Search from './Search';
import CardContainer from './Card-Container';



export default class App extends Component {
  constructor() {
    super();
    this.state = {adoptableDogs: [], rescues: []};
  }
  componentDidMount = () => {
     fetch('http://whateverly-datasets.herokuapp.com/api/v1/adoptableDogs')
       .then(response => response.json())
       .then(adoptableDogs => this.setState({
         adoptableDogs: adoptableDogs.adoptableDogs
       }))
       .catch(error => console.log(error));
     fetch('http://whateverly-datasets.herokuapp.com/api/v1/rescues')
       .then(response => response.json())
       .then(rescues => this.setState({
         rescues: rescues.rescues
       }))
       .catch(error => console.log(error))
   }
  render() {
    return (
      <div className="App">
        <Header className='display-none'/>
        <Splash />
        <Filter className='display-none'/>
        <Search className='display-none'/>
        <CardContainer dogs={this.state.adoptableDogs} className='display-none'/>
        <Footer className='display-none'/>
      </div>
    );
  }
}

