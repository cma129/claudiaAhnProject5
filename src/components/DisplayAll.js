import React, { Component } from 'react';

import axios from 'axios';

class DisplayAll extends Component {
    constructor() {
      super();
      this.state = {
        allBeers: [],
        myBeerSelection: [],
      }
    }

  componentDidMount() {
    axios({
      url: 'https://api.punkapi.com/v2/beers',
      method: 'GET',
      responseType: 'json',
    })
    .then((res) => {
      this.setState({
        allBeers: res.data
      });
    });
  }

  render () {
    return (
      <div className="DisplayAll">
        {this.state.allBeers.map((beer, i) => {
          return (
            <div key={beer.id} className="catalog" >
              <img src={beer.image_url} alt={beer.name} onClick={() => { this.props.displayInfo(i) }} />
              <h2><span className="catalogName" onClick={() => { this.props.displayInfo(i) }}>{this.state.allBeers[i].name}</span></h2>
            </div>
          )
        })}
      </div>
    )}
  }
    
  export default DisplayAll;