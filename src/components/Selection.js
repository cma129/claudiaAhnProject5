import React, { Component } from 'react';
import BeerBarrel3 from "../assets/beerBarrel3.png";

class Selection extends Component {
    constructor() {
        super();
        this.state = {
            oneFoodImg: ''
        }
    }

    render() {
        return(
            <section className="Selection" id="selection">
                <h2>My Beer Selection</h2>
                <div className="barrelContainer">
                    <img className="beerBarrel beerBarrelSelection" src={ this.props.oneFlavourImg ? this.props.oneFlavourImg: BeerBarrel3 } alt="Beer barrel" />
                    <img className="beerBarrel beerBarrelSelection" src={ this.props.oneFoodImg ? this.props.oneFoodImg : BeerBarrel3 } alt="Beer barrel" />
                    <img className="beerBarrel beerBarrelSelection" src={BeerBarrel3} alt="Beer barrel" />
                </div>
            </section>
        )
    }
}

export default Selection;



