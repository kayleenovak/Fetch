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
      selectedBreed: []
    };
    // this.filterDogs = this.filterDogs.bind(this);
    // this.allDogs = this.allDogs.bind(this)
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
    let sizeCheckbox = this.state.checkedBoxes[1].id.toLowerCase()
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
    let dogs = this.allDogs(this.state.adoptableDogs);
    this.setState({
      filteredDogs: dogs
    })
  }

  filterBreed = (event) => {
    this.state.selectedBreed = [];
    let breedNodes = document.querySelectorAll('#breed');
    for (let i = 0; i< breedNodes.length; i++) {
      if (breedNodes[i].selected === true) {
      this.state.selectedBreed.push(breedNodes[i].value)
      console.log(this.state.selectedBreed)
      console.log(breedNodes[i].value)
      }
    }
    let dogzzzz = this.allDogs(this.state.adoptableDogs)
    let filterBreed = dogzzzz.filter(currentDog => {
      return currentDog.breed === this.state.selectedBreed[0]
    })
    this.setState({filteredDogs: filterBreed})
  }

  filterGender = (event) => {
    let dogs = this.allDogs(this.state.adoptableDogs);
    let filteredDogs = dogs.filter((currentDog) => {
      return currentDog.gender === event.target.innerText
    });
    this.setState({
      filteredDogs: filteredDogs
    })
  }

  filterSize = (event) => {
    let dogs = this.allDogs(this.state.adoptableDogs);
    let filteredDogs = dogs.filter((currentDog) => {
      return currentDog.size === event.target.innerText
    });
    this.setState({
      filteredDogs: filteredDogs
    })
  }

  filterAge = (event) => {
    let dogAge = event.target.innerText;
    this.setState({
      filteredDogs: this.state.adoptableDogs[dogAge]
    })
  }

  filterPure = (event) => {
    let dogs = this.allDogs(this.state.adoptableDogs);
    let filteredDogs = dogs.filter((currentDog) => {
      if (event.target.innerText === 'Purebred') {
        return currentDog.mix_breed === false
      } else {
        return currentDog.mix_breed
      }
    })
    this.setState({
      filteredDogs: filteredDogs
    })
  }

  filterTrained = (event) => {
    let dogs = this.allDogs(this.state.adoptableDogs);
    let filteredDogs = dogs.filter((currentDog) => {
      return currentDog.house_trained
    })
    this.setState({
      filteredDogs: filteredDogs
    })
  }

  render() {
    return (
      <div className="App">
        <Splash filterDogs={ this.filterDogs }/>
        <Header />
        <Filter filterBreed= { this.filterBreed } adoptableDogs={ this.state.adoptableDogs } allDogs={ this.allDogs } filterGender={this.filterGender} filterSize={this.filterSize} 
        filterAge={this.filterAge} 
        filterPure={this.filterPure}
        filterTrained={this.filterTrained} />
        <Search searchFilter={ this.searchFilter } resetDogs={this.resetDogs} />
        <CardContainer dogs={ this.state.filteredDogs } adoptableDogs={ this.state.adoptableDogs} allDogs = { this.allDogs } 
          rescues={this.state.rescues}/>
        <Footer />
      </div>
    );
  }
}

