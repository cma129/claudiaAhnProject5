import React, { Component } from 'react';

import swal from 'sweetalert';

import BeerBarrel3 from "../assets/beerBarrel3.png";

class Selection extends Component {
    constructor() {
        super();
        this.state = {
            oneFoodImg: ''
        }
    }

    displayInfo = () => {
        if(this.props.flavourName !== '' && this.props.flavourTagline !== '' && this.props.flavourBrewersTips !== '') {
            swal({
                title: this.props.flavourName,
                text: `${this.props.flavourTagline} (Brewer's tips: ${this.props.flavourBrewersTips})`,
                dangerMode: true,
                button: "Cool!"
            })
        } else if(this.props.foodName !== undefined && this.props.foodTagline !== undefined && this.props.foodBrewersTips !== undefined) {
            swal({
                title: this.props.foodName,
                text: `${this.props.foodTagline} (Brewer's tips: ${this.props.foodBrewersTips})`,
                dangerMode: true,
                button: "Cool!"
            })
        } else {
            swal({
                title: 'Oops,',
                text: "You haven't selected a beer here yet.",
                dangerMode: true,
                button: "Oh, right!"
            })
        }
    }

    render() {
        return(
            <section className="Selection" id="selection">
                <h2>My Beer Selection</h2>
                <section>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelSelection" src={ this.props.oneFlavourImg ? this.props.oneFlavourImg: BeerBarrel3 } alt="Beer barrel" />
                        <div className="overlay">
                                <button className="info" onClick={this.displayInfo}>Info</button>
                        </div>
                    </div>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelSelection" src={ this.props.oneFoodImg ? this.props.oneFoodImg : BeerBarrel3 } alt="Beer barrel" />
                        <div className="overlay">
                                <button className="info" onClick={this.displayInfo}>Info</button>
                        </div>
                    </div>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelSelection" src={BeerBarrel3} alt="Beer barrel" />
                        <div className="overlay">
                                <button className="info" onClick={this.displayInfo}>Info</button>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default Selection;



