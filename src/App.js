import React, { Component } from 'react';
import './App.css';

import RapperForm from './RapperForm.js'
import RapperContainer from './RapperContainer.js'

class App extends Component {

  state = {
    rappers: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:3005/rappers')
      .then(res => res.json())
      .then(rappersArr => {
        this.setState({
          rappers: rappersArr
        })
      })
  }

  toggleImage = (clickedRapper) => {
    let newRappers = [...this.state.rappers]
    newRappers = newRappers.map(rapperObj => {
      if (rapperObj.name === clickedRapper.name) {
        clickedRapper.clicked = !clickedRapper.clicked
        return clickedRapper
      } else {
        return rapperObj
      }
    })

    this.setState({
      rappers: newRappers
    })
  }

  searchHandler = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    
    let newRapper = {
      name: event.target.name.value,
      rating: 0,
      clicked: false,
      sadImage: event.target.sadImage.value,
      happyImage: event.target.happyImage.value
    }

    let newRappers = [newRapper, ...this.state.rappers]
    this.setState({
      rappers: newRappers
    })
    
  }

  render(){
    let rapperList = this.state.rappers.filter(rapper => {
      return rapper.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    return (
      <div>
        <RapperForm submitHandler={this.submitHandler}/>
        <RapperContainer searchTerm={this.state.searchTerm} searchHandler={this.searchHandler} toggleImage={this.toggleImage} rappers={rapperList}/>
      </div>
    )
  }
}



export default App;
