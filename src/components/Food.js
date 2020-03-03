import React, { Component } from 'react';

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFood: "chicken"
        };
    }

    getUserFood = (e) => {
        this.setState({
            userFood: e.target.value
        });
    }

    render() {
        return(
            <section className="Food">
                <form action="">
                    <label htmlFor="whichFood">What kind of food do you want to pair it with?</label>
                    <div className="selectionLine">
                        <input type="text" onChange={this.getUserFood} id="whichFood" name="whichFood" placeholder="ex. chicken"></input>
                        <button type="submit" onClick={ (e) => this.props.foodGettingFunction(e, this.state.userFood) }
                        >
                            <img className="beerTab" src={require("../assets/beerTab.png")} alt="Beer tab" />Show me a beer!
                        </button>
                    </div>
                </form>
                <div>
                    <h2>pick for you</h2>
                    <div className="barrelContainer">
                        <img className="beerBarrel beerBarrelFood" src={ this.props.foodImgToDisplay ? this.props.foodImgToDisplay : require("../assets/beerBarrel.png") } alt="Beer barrel" />
                        <div className="overlay">
                            <button onClick={ (e) => this.props.addingToSelection() }><img className="plus" src={require("../assets/plus.png")} alt="Click to add to selection" /></button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Food;


