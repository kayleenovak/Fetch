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
    this.state = {
      adoptableDogs: [], 
      rescues: [],
      checkedBoxes: [],
      filteredDogs: [],
    };
    this.filterDogs = this.filterDogs.bind(this);
    this.allDogs = this.allDogs.bind(this)
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

  getCheckedRadios = () => {
    let filterInputs = document.querySelectorAll('.radios')
    for (var i = 0; i < filterInputs.length; i++) {
      if(filterInputs[i].checked === true) {
        this.state.checkedBoxes.push(filterInputs[i])
      }
    }
  }

  allDogs = (dogs) => {
    let allOfTheDogs = Object.keys(dogs).reduce((acc, key) => {
      dogs[key].forEach((dog, index) => {
        acc.push(dog)
      })
      return acc
    }, [])
    return allOfTheDogs
  }

  filterDogs = (event) => {
    event.preventDefault()
    this.getCheckedRadios()
    let dogs = this.allDogs(this.state.adoptableDogs);
    let sizeCheckbox = this.state.checkedBoxes[2].id.toLowerCase()
    let filteredDogs = dogs.filter(dog => {
      let dogSize = dog.size.toLowerCase()
      if(this.state.checkedBoxes[0].id.includes(dog.gender) && sizeCheckbox.includes(dogSize)) {
        return dog
      }
    })
    this.setState(
      {
        filteredDogs: filteredDogs
      } 
    )
  }

  searchFilter = (event) => {
    let dogs = this.allDogs(this.state.adoptableDogs);
    let filteredDogs = dogs.filter((currentDog) => {
      return currentDog.name.toLowerCase() === document.querySelector('.search-bar').value.toLowerCase()
    });
    this.setState({
      filteredDogs: filteredDogs
    })
  }

  resetDogs = (event) => {
    console.log('adoptable', this.state.adoptableDogs)
    let dogs = this.allDogs(this.state.adoptableDogs);
    this.setState({
      filteredDogs: dogs
    })
  }

  render() {
    return (
      <div className="App">
        <Splash filterDogs={ this.filterDogs }/>
        <Header />
        <Filter />
        <Search searchFilter={ this.searchFilter } resetDogs={this.resetDogs} />
        <CardContainer dogs={ this.state.filteredDogs } adoptableDogs={ this.state.adoptableDogs} allDogs = { this.allDogs }/>
        <Footer />
      </div>
    );
  }
}

