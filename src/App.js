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

  getCheckedBoxes = () => {
    let filterInputs = document.querySelectorAll('.radios')
    for (var i = 0; i < filterInputs.length; i++) {
      if(filterInputs[i].checked === true) {
        this.state.checkedBoxes.push(filterInputs[i])
      }
    }
  }

  allDogs = (dogs) => {
    Object.keys(dogs).reduce((acc, key) => {
      dogs[key].forEach((dog, index) => {
        acc.push(dog)
      })
      return acc
    }, [])
  }

  filterDogs = () => {
    let dogs = this.allDogs(this.state.adoptableDogs)
    this.state.checkedBoxes.forEach(checkbox => {
      let filteredArray = []
      let checkboxId = checkbox.id
      let checkboxName = checkbox.name
      dogs.forEach(dog => {
        let dogKeyValue = String(dog[checkboxId])
        if (dogKeyValue === checkboxName) {
          this.state.filteredDogs.push(dog)
        }
      })
      dogs = this.state.filteredDogs
    })
    this.state.adoptableDogs = dogs
  }

  render() {
    return (
      <div className="App">
        <Splash filterDogs={ this.filterDogs }/>
        <Header />
        <Filter />
        <Search />
        <CardContainer dogs={this.state.adoptableDogs} />
        <Footer />
      </div>
    );
  }
}

