import React, { Component } from 'react';
import ReactLoading from "react-loading";

import BeerTab from "../assets/beerTab.png";
import BeerBarrel from "../assets/beerBarrel.png";
import Click from "../assets/click.png";

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
                    <label htmlFor="whichFood">Food you wanna pair it with?</label>
                    <div className="selectionLine">
                        <select onChange={this.getUserFood} id="whichFood" name="whichFood">
                            <option value="cheese">Cheese</option>
                            <option value="salad">Salad</option>
                            <option value="cake">Cake</option>
                            <option value="pie">Pie</option>
                            <option value="chicken">Chicken</option>
                            <option value="beef">Beef</option>
                            <option value="burger">Burger</option>
                            <option value="cream">Cream sauce</option>
                            <option value="sandwich">Sandwich</option>
                            <option value="bread">Bread</option>
                        </select>
                        <button className="button" type="submit" onClick={ (e) => this.props.foodGettingFunction(e, this.state.userFood) }
                        >
                            <img className="beerTab" src={BeerTab} alt="Beer tab" />Show me a beer!
                        </button>
                    </div>
                </form>
                <div>
                    <div className="pick">
                        <h2><span>Pick for you:</span>{this.props.oneFoodName ? this.props.oneFoodName : ""}</h2>
                    </div>
                    <div className="barrelContainer" onClick={this.props.displayFoodInfo}>
                        {this.props.done === false ? <img className="beerBarrel beerBarrelFood" src={this.props.foodImgToDisplay ? this.props.foodImgToDisplay : BeerBarrel} alt={this.props.oneFoodName ? this.props.oneFoodName : "Beer barrel"} /> : (<ReactLoading type={"bubbles"} color={"#e0e0e2"} height={'20%'} width={'20%'} className={"preloader"} />)}
                        <p className="name">{this.props.oneFoodTagline ? this.props.oneFoodTagline : "Pls search beer"}</p>
                        <img className="click" src={Click} alt="Click"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Food;


