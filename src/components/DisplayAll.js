import React, { Component } from 'react';

import axios from 'axios';
import ReactLoading from "react-loading";

class DisplayAll extends Component {
    constructor() {
      super();
      this.state = {
        allBeers: [],
        myBeerSelection: [],
        loaded: false
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
        allBeers: res.data,
        loaded: true
      });
    });
  }

  render () {
    return (
      <div className="DisplayAll">
        {this.state.allBeers.map((beer, i) => {
          return (
            <div key={beer.id} className="catalog" >
              {this.state.loaded ? <img src={beer.image_url} alt={beer.name} onClick={() => { this.props.displayInfo(i) }} /> : (<ReactLoading type={"bubbles"} color={"#e0e0e2"} height={'40%'} width={'40%'} className={"preloader"} />)}
              <h2><span className="catalogName" onClick={() => { this.props.displayInfo(i) }}>{this.state.allBeers[i].name}</span></h2>
            </div>
          )
        })}
      </div>
    )}
  }
    
  export default DisplayAll;