import React, { Component } from 'react';
import './index.css';

import axios from 'axios';

import Header from './components/Header';
import Flavour from './components/Flavour';
import Food from './components/Food';
import Selection from './components/Selection';
import Footer from './components/Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
      userFlavourSelection: "",
      userFoodSelection: ""
    }
  }

  componentDidMount() {
    axios({
      url: 'https://api.punkapi.com/v2/beers',
      method: 'GET',
      responseType: 'json',
    })
    .then( (response) => {
      this.setState({
        allBeers: response.data
      })
    });
  }

// Get user selection from Flavour component
whichFlavour = (e, userFlavour) => {
  e.preventDefault();
  this.setState({
    userFlavourSelection: userFlavour
  }, () => this.findFlavour(userFlavour))
}

// Get user selection from Food component
whichFood = (e, userFood) => {
  e.preventDefault();
  this.setState({
    userFoodSelection: userFood
  }, () => this.findFood(userFood))
}

// Use flavour user selection to filter through allBeers array, and save to state.
findFlavour = () => {
  const copyOfAllBeers = [...this.state.allBeers];
  const randomFlavours = copyOfAllBeers.filter( (beer) => {
    return beer.description.includes(this.state.userFlavourSelection)
  })

  // Pull random one
  const chooseRandomFlavour = (randomFlavours) => {
    const num = Math.floor( Math.random() * (randomFlavours.length+1));
    const oneFlavour = randomFlavours[ num ];
    const oneFlavourImg = oneFlavour.image_url;
  console.log(oneFlavourImg);
  }
}
// Display image of beer
// const displayFlavour = () => {
  // return (
  //   <img
  //     scr="oneFlavourImg"
  //     alt="oneFlavour.name"
  //     />
  //   );
  // }

//   this.setState({
//     copyOfAllBeers: displayFlavour
//   }, () => {
//     // console.log(this.setState);
//   })



// Use food user selection to filter through allBeers array, and save to state.
findFood = () => {
  const randomFoods = []
  const copyOfAllBeers = [...this.state.allBeers];
  copyOfAllBeers.forEach( (beer) => {
    let foodPairing = ''
    beer.food_pairing.forEach((pair) => {
      foodPairing = foodPairing + pair
    })
    if (foodPairing.includes(this.state.userFoodSelection)){
      randomFoods.push(beer)
    } else {
      const foodErrorMessage = "Sorry, there's no beer that matches your food pairing selection 😯";
      console.log(foodErrorMessage);
    }
  })
  
  // pull random one
  const chooseRandomFood = () => {
    const num = Math.floor( Math.random() * (randomFoods.length+1));
    const oneFood = randomFoods[ num ];
    const oneFoodImg = oneFood.image_url;
  console.log(oneFoodImg);
  }
  return randomFoods;

  // this.setState({
  //   copyOfAllBeers: beerFood
  // }, () => {
  //   console.log(this.setState);
  // })


  //Add to selection on click
  // const myBeerSelection = [];
  // if (myBeerSelection.length < 3) {
  //   myBeerSelection.unshift(this)
  // } else {
  //   const selectionErrorMessage = "Sorry, you already have 3 picks in your selection. Please remove some and try adding again."
  //   console.log(selectionErrorMessage);
  // }

  //Remove from selection on click
  //myBeerSelection.REMOVE(this)


  }


  render () {
    return (
      <div className="App">
        <Header />
        <main className="wrapper">
          <div className="flavourFoodContainer">
            <Flavour flavourGettingFunction={this.whichFlavour}/>
            <Food foodGettingFunction={this.whichFood} />
          </div>
          <Selection />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;