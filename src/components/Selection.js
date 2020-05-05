import React, { Component } from 'react';

import swal from 'sweetalert';

import BeerBarrel3 from "../assets/beerBarrel3.png";

class Selection extends Component {

    // Show beer info on 'info' button click
    displayInfo = (i) => {
        if (this.props.myBeerSelection[i] !== undefined) {
            swal({
                title: this.props.myBeerSelection[i].oneName,
                text: `${this.props.myBeerSelection[i].oneTagline} (Brewer's tips: ${this.props.myBeerSelection[i].oneBrewersTips})`,
                dangerMode: true,
                button: "Cool!"
            })
        } else if (this.props.myBeerSelection[i] === undefined) {
            swal({
                title: 'Oops,',
                text: "you haven't added a beer here yet.",
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
                    <div className="barrelContainer" onClick={() => { this.props.displaySelectionInfo(0) }}>
                        <img className="beerBarrel beerBarrelSelection" src={this.props.myBeerSelection[0] ? this.props.myBeerSelection[0].oneImg : BeerBarrel3} alt={this.props.myBeerSelection[0] ? this.props.myBeerSelection[0].oneName : "Beer barrel"} />
                        <h2><span className="selectionName">{this.props.myBeerSelection[0] ? this.props.myBeerSelection[0].oneName : "Pls add beer"}</span></h2>
                    </div>
                    <div className="barrelContainer" onClick={() => { this.props.displaySelectionInfo(1) }}>
                        <img className="beerBarrel beerBarrelSelection" src={this.props.myBeerSelection[1] ? this.props.myBeerSelection[1].oneImg : BeerBarrel3} alt={this.props.myBeerSelection[1] ? this.props.myBeerSelection[1].oneName : "Beer barrel"} />
                        <h2><span className="selectionName">{this.props.myBeerSelection[1] ? this.props.myBeerSelection[1].oneName : "Pls add beer"}</span></h2>
                    </div>
                    <div className="barrelContainer" onClick={() => { this.props.displaySelectionInfo(2) }}>
                        <img className="beerBarrel beerBarrelSelection" src={this.props.myBeerSelection[2] ? this.props.myBeerSelection[2].oneImg : BeerBarrel3} alt={this.props.myBeerSelection[2] ? this.props.myBeerSelection[2].oneName : "Beer barrel"} />
                        <h2><span className="selectionName">{this.props.myBeerSelection[2] ? this.props.myBeerSelection[2].oneName : "Pls add beer"}</span></h2>
                    </div>
                    <div className="barrelContainer" onClick={() => { this.props.displaySelectionInfo(3) }}>
                        <img className="beerBarrel beerBarrelSelection" src={this.props.myBeerSelection[3] ? this.props.myBeerSelection[3].oneImg : BeerBarrel3} alt={this.props.myBeerSelection[3] ? this.props.myBeerSelection[3].oneName : "Beer barrel"} />
                        <h2><span className="selectionName">{this.props.myBeerSelection[3] ? this.props.myBeerSelection[3].oneName : "Pls add beer"}</span></h2>
                    </div>
                    <div className="barrelContainer" onClick={() => { this.props.displaySelectionInfo(4) }}>
                        <img className="beerBarrel beerBarrelSelection" src={this.props.myBeerSelection[4] ? this.props.myBeerSelection[4].oneImg : BeerBarrel3} alt={this.props.myBeerSelection[4] ? this.props.myBeerSelection[4].oneName : "Beer barrel"} />
                        <h2><span className="selectionName">{this.props.myBeerSelection[4] ? this.props.myBeerSelection[4].oneName : "Pls add beer"}</span></h2>
                    </div>
                    <div className="barrelContainer" onClick={() => { this.props.displaySelectionInfo(5) }}>
                        <img className="beerBarrel beerBarrelSelection" src={this.props.myBeerSelection[5] ? this.props.myBeerSelection[5].oneImg : BeerBarrel3} alt={this.props.myBeerSelection[5] ? this.props.myBeerSelection[5].oneName : "Beer barrel"} />
                        <h2><span className="selectionName">{this.props.myBeerSelection[5] ? this.props.myBeerSelection[5].oneName : "Pls add beer"}</span></h2>
                    </div>
                </section>
                <p className="clickBeer">↑ Click on beer!</p>
            </section>
        )
    }
}

export default Selection;



