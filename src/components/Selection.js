import React, { Component } from 'react';

import swal from 'sweetalert';

import BeerBarrel3 from "../assets/beerBarrel3.png";

class Selection extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    // Show beer info on 'info' button click
    displayInfo = (i) => {
        if(this.props.myBeerSelection[i] !== undefined) {
            swal({
                title: this.props.myBeerSelection[i].oneName,
                text: `${this.props.myBeerSelection[i].oneTagline} (Brewer's tips: ${this.props.myBeerSelection[i].oneBrewersTips})`,
                dangerMode: true,
                button: "Cool!"
            })
        } else if(this.props.myBeerSelection[i] === undefined) {
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
                        <img className="beerBarrel beerBarrelSelection" src={ this.props.myBeerSelection[0] ? this.props.myBeerSelection[0].oneImg: BeerBarrel3 } alt="Beer" />
                        <div className="overlay">
                            <button className="info" onClick={ () => {this.displayInfo(0)} }>Info</button>
                            <button className="plusMinus" onClick={ () => {this.props.removing(0) } }>-</button>
                        </div>
                    </div>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelSelection" src={ this.props.myBeerSelection[1] ? this.props.myBeerSelection[1].oneImg: BeerBarrel3 } alt="Beer" />
                        <div className="overlay">
                            <button className="info" onClick={ () => {this.displayInfo(1)} }>Info</button>
                            <button className="plusMinus" onClick={ () => {this.props.removing(1) } }>-</button>
                        </div>
                    </div>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelSelection" src={ this.props.myBeerSelection[2] ? this.props.myBeerSelection[2].oneImg: BeerBarrel3 } alt="Beer" />
                        <div className="overlay">
                            <button className="info" onClick={ () => {this.displayInfo(2)} }>Info</button>
                            <button className="plusMinus" onClick={ () => {this.props.removing(2) } }>-</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelSelection" src={ this.props.myBeerSelection[3] ? this.props.myBeerSelection[3].oneImg: BeerBarrel3 } alt="Beer" />
                        <div className="overlay">
                        <button className="info" onClick={ () => {this.displayInfo(3)} }>Info</button>
                        <button className="plusMinus" onClick={ () => {this.props.removing(3) } }>-</button>
                        </div>
                    </div>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelSelection" src={ this.props.myBeerSelection[4] ? this.props.myBeerSelection[4].oneImg: BeerBarrel3 } alt="Beer" />
                        <div className="overlay">
                            <button className="info" onClick={ () => {this.displayInfo(4)} }>Info</button>
                            <button className="plusMinus" onClick={ () => {this.props.removing(4) } }>-</button>
                        </div>
                    </div>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelSelection" src={ this.props.myBeerSelection[5] ? this.props.myBeerSelection[5].oneImg: BeerBarrel3 } alt="Beer" />
                        <div className="overlay">
                            <button className="info" onClick={ () => {this.displayInfo(5)} }>Info</button>
                            <button className="plusMinus" onClick={ () => {this.props.removing(5) } }>-</button>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default Selection;



