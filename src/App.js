import React, { Component } from 'react';
import './index.css';

import axios from 'axios';
import swal from 'sweetalert';

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
      userFoodSelection: "",
      oneFlavourImg: "",
      oneFlavourName: "",
      oneFlavourTagline: "",
      oneFlavourBrewersTips: "",
      oneFoodImg: "",
      oneFoodName: "",
      oneFoodTagline: "",
      oneFoodBrewersTips: "",
      myBeerSelection: [],
      oneFlavourInfo: {},
      oneFoodInfo: {},
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
      const num = Math.floor( Math.random() * (randomFlavours.length));
      const oneFlavour = randomFlavours[ num ];
      const oneFlavourImg = oneFlavour.image_url;
      const oneFlavourName = oneFlavour.name;
      const oneFlavourTagline = oneFlavour.tagline;
      const oneFlavourBrewersTips = oneFlavour.brewers_tips;
      this.setState({
        oneFlavourImg: oneFlavourImg,
        oneFlavourName: oneFlavourName,
        oneFlavourTagline: oneFlavourTagline,
        oneFlavourBrewersTips: oneFlavourBrewersTips
      })
      return oneFlavourImg
    }
    this.setState({
      flavourImg: chooseRandomFlavour(randomFlavours),
    })
  }

  // Use food user selection to filter through allBeers array, and save to state.
  findFood = () => {
    const randomFoods = []
    const copyOfAllBeers = [...this.state.allBeers];
    copyOfAllBeers.forEach(beer => {
      let foodPairing = ''
      beer.food_pairing.forEach((pair) => {
        foodPairing = foodPairing + pair
      })
      if (foodPairing.includes(this.state.userFoodSelection)){
        randomFoods.push(beer);
        return randomFoods;
      }
    })
    // pull random one
    if(randomFoods.length > 0){
      const chooseRandomFood = (randomFoods) => {
        const num = Math.floor( Math.random() * (randomFoods.length));
        const oneFood = randomFoods[ num ];
        const oneFoodImg = oneFood.image_url;
        const oneFoodName = oneFood.name;
        const oneFoodTagline = oneFood.tagline;
        const oneFoodBrewersTips = oneFood.brewers_tips;
        this.setState({
                oneFoodImg: oneFoodImg,
                oneFoodName: oneFoodName,
                oneFoodTagline: oneFoodTagline,
                oneFoodBrewersTips: oneFoodBrewersTips
              })
              return oneFoodImg
            }
            this.setState({
              foodImg: chooseRandomFood(randomFoods),
            })
        // Custom error message
      } else {
          const foodErrorMessage = "There's no beer that matches this food pairing.";
          swal({
            title: 'Sorry',
            text: foodErrorMessage,
            dangerMode: true,
          });
      }
  }

  //Add flavour image to my beer selection
  addingFlavourToSelection = (beerSelection) => {
    const selection = [...this.state.myBeerSelection]
    if (selection.length > 5) {
      const addingError = "You've already got 6 beers in your selection. Please remove some and try adding again.";
      swal({
        title: 'Sorry',
        text: addingError,
        dangerMode: true,
      })
    } else if(this.state.oneFlavourImg === '') {
      swal({
        title: 'Oops,',
        text: 'please search a beer.',
        dangerMode: true,
        button: "Oh, right!"
      })
    } else if (selection.some(e => e.oneName === this.state.oneFlavourName)) {  
      swal({
        title: 'Oh,',
        text: "looks like you've already got this beer in your selection.",
        dangerMode: true,
      })
    } else {
      const oneFlavourInfo = {
        oneImg: this.state.oneFlavourImg,
        oneName: this.state.oneFlavourName,
        oneTagline: this.state.oneFlavourTagline,
        oneBrewersTips: this.state.oneFlavourBrewersTips
      }
      selection.push(oneFlavourInfo)
      this.setState({
        oneFlavourInfo: oneFlavourInfo,
        myBeerSelection: selection,
      })
    }
  }

  //Add food image to my beer selection
  addingFoodToSelection = (beerSelection) => {
    const selection = [...this.state.myBeerSelection]
    if (selection.length > 5) {
      const addingError = "You've already got 6 beers in your selection. Please remove some and try adding again.";
      swal({
        title: 'Sorry',
        text: addingError,
        dangerMode: true,
      })
    } else if(this.state.oneFoodImg === '') {
      swal({
        title: 'Oops,',
        text: 'please search a beer.',
        dangerMode: true,
        button: "Oh, right!"
      })
    } else if (selection.some(e => e.oneName  === this.state.oneFoodName)) {  
      swal({
        title: 'Oh,',
        text: "looks like you've already got this beer in your selection.",
        dangerMode: true,
      })
    } else {
      const oneFoodInfo = {
        oneImg: this.state.oneFoodImg,
        oneName: this.state.oneFoodName,
        oneTagline: this.state.oneFoodTagline,
        oneBrewersTips: this.state.oneFoodBrewersTips
      }
      selection.push(oneFoodInfo)
      this.setState({
        oneFoodInfo: oneFoodInfo,
        myBeerSelection: selection,
      })
    }
  }

  //Remove beer from selection on '-' click
  removing = (i) => {
    if(this.state.myBeerSelection[i] === undefined) {
      swal({
        title: 'Oops,',
        text: 'no beer to delete here.',
        dangerMode: true,
        button: "Oh, right!"
      })
    } else {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        dangerMode: true,
        buttons: ["Never mind", "Delete"]     
      })
      .then((willDelete) => {
        if (willDelete) {
          this.state.myBeerSelection.splice(i, 1)
          this.setState ({
            myBeerSelection: this.state.myBeerSelection
          })
        }
      })
    }
  }

  render () {
    return (
      <div className="App">
        <Header />
        <main className="wrapper">
          <div className="picks" id="picks"></div>
          <div className="flavourFoodContainer">
            <Flavour flavourGettingFunction={this.whichFlavour} flavourImgToDisplay={this.state.flavourImg} flavourName={this.state.oneFlavourName} flavourTagline={this.state.oneFlavourTagline} flavourBrewersTips={this.state.oneFlavourBrewersTips}  addingFlavourToSelection={this.addingFlavourToSelection} />
            <Food foodGettingFunction={this.whichFood} foodImgToDisplay={this.state.foodImg} foodName={this.state.oneFoodName} foodTagline={this.state.oneFoodTagline} foodBrewersTips={this.state.oneFoodBrewersTips} addingFoodToSelection={this.addingFoodToSelection}/>
          </div>
          <Selection oneFlavourInfo={this.state.oneFlavourInfo} oneFoodInfo={this.state.oneFoodInfo} myBeerSelection={this.state.myBeerSelection} removing={this.removing} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;