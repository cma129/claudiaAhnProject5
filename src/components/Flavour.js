import React, { Component } from 'react';

import swal from 'sweetalert';

import BeerTab from "../assets/beerTab.png";
import BeerBarrel from "../assets/beerBarrel.png";

class Flavour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFlavour: "fruit",
        };
    }

    getUserFlavour = (e) => {
        this.setState({
            userFlavour: e.target.value
        });
    }

    //Show beer info on hover & button click
    displayInfo = () => {
        if(this.props.flavourName !== '' && this.props.flavourTagline !== '' && this.props.flavourBrewersTips !== '') {
            swal({
                title: this.props.flavourName,
                text: `${this.props.flavourTagline} (Brewer's tips: ${this.props.flavourBrewersTips})`,
                dangerMode: true,
                button: "Cool!"
            })
        } else {
            swal({
                title: 'Oops,',
                text: 'please search a beer.',
                dangerMode: true,
                button: "Oh, right!"
            })
        }
    }

    render() {
        return(
            <section className="Flavour">
                    <form action="">
                        <label htmlFor="whichFlavour">What kind of flavour do you want?</label>
                        <div className="selectionLine">
                            <select onChange={this.getUserFlavour}id="whichFlavour" name="whichFlavour">
                                <option value="fruit">Fruity</option>
                                <option value="bitter">Bitter</option>
                                <option value="citrus">Citrus</option>
                                <option value="spicy">Spicy</option>
                            </select>
                            <button className="button" type="submit" onClick={ (e) => this.props.flavourGettingFunction(e, this.state.userFlavour) }
                            >
                                <img className="beerTab" src={BeerTab} alt="Beer tab" />Show me a beer!
                            </button>
                        </div>
                    </form>
                    <div>
                        <h2>pick for you</h2>
                        <div className="barrelContainer">
                            <img className="beerBarrel beerBarrelFlavour" src={ this.props.flavourImgToDisplay ? this.props.flavourImgToDisplay : BeerBarrel } alt="Beer" />
                            <p>{this.props.oneFlavourName}</p>
                            <div className="overlay">
                                <button className="info" onClick={ this.displayInfo }>Info</button>
                                <button className="plusMinus" onClick={ this.props.addingFlavourToSelection }>+</button>
                            </div>
                        </div>
                    </div>
                    <a href="#selection" className="button check">Check my selection</a>
            </section>
        );
    }
}
export default Flavour;