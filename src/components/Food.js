import React, { Component } from 'react';

import swal from 'sweetalert';

import BeerTab from "../assets/beerTab.png";
import BeerBarrel from "../assets/beerBarrel.png";

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFood: "chicken"
        };
    }

    getUserFood = (e) => {
        this.setState({
            userFood: e.target.value.toLowerCase()
        });
    }

    render() {
        return(
            <section className="Food"  id="food">
                <form action="">
                    <label htmlFor="whichFood">What kind of food do you want to pair it with?</label>
                    <div className="selectionLine">
                        <input type="text" onChange={this.getUserFood} id="whichFood" name="whichFood" placeholder="ex. chicken"></input>
                        <button className="button" type="submit" onClick={ (e) => this.props.foodGettingFunction(e, this.state.userFood) }
                        >
                            <img className="beerTab" src={BeerTab} alt="Beer tab" />Show me a beer!
                        </button>
                    </div>
                </form>
                <div>
                    <h2>pick for you</h2>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelFood" src={ this.props.foodImgToDisplay ? this.props.foodImgToDisplay : BeerBarrel } onClick={ this.props.displayFoodInfo } alt="Beer" />
                    </div>
                </div>
                <a href="#selection" className="button check">Check my selection</a>
            </section>
        );
    }
}

export default Food;


