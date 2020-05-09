import React, { Component } from 'react';
import './index.css';

import axios from 'axios';
import swal from 'sweetalert';

import Header from './components/Header';
import Flavour from './components/Flavour';
import Food from './components/Food';
import Selection from './components/Selection';
import DisplayAll from './components/DisplayAll';
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
      catalogInfo: {},
      loading: true,
      done: false,
      isHidden: true
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
        allBeers: response.data,
      })
    });
  }

  // Get user selection from Flavour component
  whichFlavour = (e, userFlavour) => {
    e.preventDefault();
    axios({
      url: 'https://api.punkapi.com/v2/beers',
      method: 'GET',
      responseType: 'json',
    })
      .then((response) => {
        this.setState({
          allBeers: response.data,
          loading: true
        })
      });
    this.setState({
      userFlavourSelection: userFlavour,
    },
    () => this.findFlavour(userFlavour))
  }

  // Get user selection from Food component
  whichFood = (e, userFood) => {
    e.preventDefault();
    axios({
      url: 'https://api.punkapi.com/v2/beers',
      method: 'GET',
      responseType: 'json',
    })
      .then((response) => {
        this.setState({
          allBeers: response.data,
          done: false
        })
      });
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
        oneFlavourBrewersTips: oneFlavourBrewersTips,
      })
      return oneFlavourImg
    }
    this.setState({
      flavourImg: chooseRandomFlavour(randomFlavours),
      loading: false
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
              done: true
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

  //Show flavour beer info on hover & button click
  displayFlavourInfo = () => {
    const oneFlavourInfo = {
      oneImg: this.state.oneFlavourImg,
      oneName: this.state.oneFlavourName,
      oneTagline: this.state.oneFlavourTagline,
      oneBrewersTips: this.state.oneFlavourBrewersTips
    }
    if(this.state.oneFlavourName !== '' && this.state.oneFlavourTagline !== '' && this.state.oneFlavourBrewersTips !== '') {
      swal({
        title: this.state.oneFlavourName,
        text: `${this.state.oneFlavourTagline} (Brewer's tips: ${this.state.oneFlavourBrewersTips})`,
        dangerMode: true,
        buttons: ["Cool!", "Add to my selection"]
      })
      .then((willAdd) => {
        if (willAdd) {
        this.addingFlavourToSelection()
        }
      })
    } else {
      swal({
        title: 'Oops,',
        text: 'please search a beer.',
        dangerMode: true,
        button: "Oh, right!"
      })
    }
    this.setState({
      displayFlavourInfo: this.displayFlavourInfo,
      oneFlavourInfo: oneFlavourInfo
    })
  }

  //Show food beer info on hover & button click
  displayFoodInfo = () => {
    const oneFoodInfo = {
      oneImg: this.state.oneFoodImg,
      oneName: this.state.oneFoodName,
      oneTagline: this.state.oneFoodTagline,
      oneBrewersTips: this.state.oneFoodBrewersTips
    }
    if(this.state.oneFoodName !== '' && this.state.oneFoodTagline !== '' && this.state.oneFoodBrewersTips !== '') {
      swal({
        title: this.state.oneFoodName,
          text: `${this.state.oneFoodTagline} (Brewer's tips: ${this.state.oneFoodBrewersTips})`,
          dangerMode: true,
        buttons: ["Cool!", "Add to my selection"]
      })
      .then((willAdd) => {
        if (willAdd) {
        this.addingFoodToSelection()
        }
      })
    } else {
      swal({
        title: 'Oops,',
        text: 'please search a beer.',
        dangerMode: true,
        button: "Oh, right!"
      })
    }
    this.setState({
      displayFoodInfo: this.displayFoodInfo,
      oneFoodInfo: oneFoodInfo
    })
  }

  //Add flavour image to my beer selection
  addingFlavourToSelection = () => {
    const selection = [...this.state.myBeerSelection]
    if(this.state.oneFlavourImg === '') {
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
    } else if (selection.length > 5) {
      const addingError = "You've already got 6 beers in your selection. Please remove some and try adding again.";
      swal({
        title: 'Sorry',
        text: addingError,
        dangerMode: true,
      })
    } else {
      const oneFlavourInfo = {
        oneImg: this.state.oneFlavourImg,
        oneName: this.state.oneFlavourName,
        oneTagline: this.state.oneFlavourTagline,
        oneBrewersTips: this.state.oneFlavourBrewersTips
    }
      swal({
        title: 'You want to add this one, right?',
        dangerMode: true,
        buttons: ["Yeah", "Nope"]     
      })
      .then((wontAdd) => {
        if (!wontAdd) {
          selection.push(oneFlavourInfo)
          this.setState({
            oneFlavourInfo: oneFlavourInfo,
            myBeerSelection: selection,
          })
        }
      })
    }
  }

  //Add food image to my beer selection
  addingFoodToSelection = (beerSelection) => {
    const selection = [...this.state.myBeerSelection]
    if(this.state.oneFoodImg === '') {
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
    } else if (selection.length > 5) {
      const addingError = "You've already got 6 beers in your selection. Please remove some and try adding again.";
      swal({
        title: 'Sorry',
        text: addingError,
        dangerMode: true,
      })
    } else {
      const oneFoodInfo = {
        oneImg: this.state.oneFoodImg,
        oneName: this.state.oneFoodName,
        oneTagline: this.state.oneFoodTagline,
        oneBrewersTips: this.state.oneFoodBrewersTips
      }
      swal({
        title: 'You want to add this one, right?',
        dangerMode: true,
        buttons: ["Yeah", "Nope"]     
      })
      .then((wontAdd) => {
        if (!wontAdd) {
          selection.push(oneFoodInfo)
          this.setState({
            oneFoodInfo: oneFoodInfo,
            myBeerSelection: selection,
          })
        }
      })
    }
  }

  // Show selection beer info on 'info' button click
    displaySelectionInfo = (i) => {
        if (this.state.myBeerSelection[i] !== undefined) {
            swal({
                title: this.state.myBeerSelection[i].oneName,
                text: `${this.state.myBeerSelection[i].oneTagline} (Brewer's tips: ${this.state.myBeerSelection[i].oneBrewersTips})`,
                dangerMode: true,
                buttons: ["Cool!", "Remove from my selection"]
            })
            .then((willRemove) => {
              if (willRemove) {
              this.removing(i)
              }
            })
        } else if (this.state.myBeerSelection[i] === undefined) {
            swal({
                title: 'Oops,',
                text: "you haven't added a beer here yet.",
                dangerMode: true,
                button: "Oh, right!"
            })
        }
        this.setState({
          displaySelectionInfo: this.displaySelectionInfo
        })
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

  //Show catalogue beer info on hover & button click
  displayInfo = (i) => {
    const info = {
      image: this.state.allBeers[i].image_url,
      name: this.state.allBeers[i].name,
      tagLine: this.state.allBeers[i].tagline,
      brewersTips: this.state.allBeers[i].brewers_tips
    }
    swal({
        title: info.name,
        text: `${info.tagLine} (Brewer's tips: ${info.brewersTips})`,
        dangerMode: true,
        buttons: ["Cool!", "Add to my selection"]
    })
    .then((willAdd) => {
      if (willAdd) {
        this.addingToSelection(i)
      }
    })
    this.setState({
      displayInfo: this.displayInfo,
      info: info
    })
  }

    //Add image to my beer selection
    addingToSelection = (i) => {
      const selection = [...this.state.myBeerSelection]
      if (selection.some(e => e.oneName === this.state.info.name)) {  
        swal({
          title: 'Oh,',
          text: "looks like you've already got this beer in your selection.",
          dangerMode: true,
        })
      } else if (selection.length > 5) {
        const addingError = "You've already got 6 beers in your selection. Please remove some and try adding again.";
        swal({
          title: 'Sorry',
          text: addingError,
          dangerMode: true,
        })
      } else {
        const catalogInfo = {
          oneImg: this.state.allBeers[i].image_url,
          oneName: this.state.allBeers[i].name,
          oneTagLine: this.state.allBeers[i].tagline,
          oneBrewersTips: this.state.allBeers[i].brewers_tips
        }
        swal({
          title: 'You want to add this one, right?',
          dangerMode: true,
          buttons: ["Yeah", "Nope"]     
        })
        .then((wontAdd) => {
          if (!wontAdd) {
            selection.push(catalogInfo)
            this.setState({
              addingToSelection: this.addingToSelection,
              catalogInfo: catalogInfo,
              myBeerSelection: selection,
            })
          }
        })
      }
    }
  
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }

  render () {
    return (
      <div className="App">
        <Header />
        <main className="wrapper">
          <div className="picks" id="picks"></div>
          <div className="flavourFoodContainer">
            <Flavour flavourGettingFunction={this.whichFlavour} flavourImgToDisplay={this.state.flavourImg} displayFlavourInfo={this.displayFlavourInfo} oneFlavourName={this.state.oneFlavourName} oneFlavourTagline={this.state.oneFlavourTagline} loading={this.state.loading} />
            <Food foodGettingFunction={this.whichFood} foodImgToDisplay={this.state.foodImg} displayFoodInfo={this.displayFoodInfo} oneFoodName={this.state.oneFoodName} oneFoodTagline={this.state.oneFoodTagline} done={this.state.done} />
          </div>
          <Selection oneFlavourInfo={this.state.oneFlavourInfo} oneFoodInfo={this.state.oneFoodInfo} myBeerSelection={this.state.myBeerSelection} displaySelectionInfo={this.displaySelectionInfo} removing={this.removing} />
          <section className="showContainer">
            <p></p>
            <p className="clickBeer">{this.state.isHidden ? "" : "↓ Click beer for details!"}</p>
            <div>
              <button className="show" onClick={this.toggleHidden.bind(this)}>{this.state.isHidden ? "Show all beers" : "Hide"}</button>
            </div>
          </section>
          {!this.state.isHidden && <DisplayAll displayInfo={this.displayInfo} myBeerSelection={this.state.myBeerSelection}/>}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;