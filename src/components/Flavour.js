import React, { Component } from 'react';
import ReactLoading from "react-loading";

import BeerTab from "../assets/beerTab.png";
import BeerBarrel from "../assets/beerBarrel.png";
import Multi from "../assets/multi.png";
import Click from "../assets/click.png";

class Flavour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFlavour: "fruit",
        };
    }

    getUserFlavour = (e) => {
        this.setState({
            userFlavour: e.target.value,
        });
    }

    render() {
        return(
            <section className="Flavour">
                <form action="">
                    <label htmlFor="whichFlavour">What flavour do you want?</label>
                    <div className="selectionLine">
                        <select onChange={this.getUserFlavour}id="whichFlavour" name="whichFlavour">
                            <option value="hop">Hoppy</option>
                            <option value="malt">Malty</option>
                            <option value="bitter">Bitter</option>
                            <option value="citrus">Citrus</option>
                            <option value="fruit">Fruity</option>
                            <option value="spicy">Spicy</option>
                        </select>
                        <button className="button" type="submit" onClick={ (e) => this.props.flavourGettingFunction(e, this.state.userFlavour) }
                        >
                            <img className="beerTab" src={BeerTab} alt="Beer tab" />Show me a beer!
                        </button>
                    </div>
                </form>
                <div>
                    <div className="pick">
                        <h2><span>Pick for you:</span>{this.props.oneFlavourName ? this.props.oneFlavourName : ""}</h2>
                    </div>
                    <div className="barrelContainer" onClick={this.props.displayFlavourInfo}>
                        {this.props.loading ? <img className="beerBarrel beerBarrelFlavour" src={this.props.flavourImgToDisplay ? this.props.flavourImgToDisplay : BeerBarrel} alt={this.props.oneFlavourName ? this.props.oneFlavourName : "Beer barrel"} /> : (<ReactLoading type={"bubbles"} color={"#e0e0e2"} height={'20%'} width={'20%'} className={"preloader"} />)}
                        <p className="name">{this.props.oneFlavourTagline ? this.props.oneFlavourTagline : "Pls search beer"}</p>
                        <img className="click" src={Click} alt="Click"/>
                    </div>
                </div>
                <a className="checkContainer" href="#selection">
                    <img className="check" src={Multi} alt="check my selection" />
                    <p className="over">Check my selection!</p>
                </a>
            </section>
        );
    }
}
export default Flavour;