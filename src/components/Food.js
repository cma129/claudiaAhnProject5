import React, { Component } from 'react';

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFood: "fries"
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
                            <input type="text" onChange={this.getUserFood} id="whichFood" name="whichFood" placeholder="ex. fries"></input>
                            <button type="submit" onClick={ (e) => this.props.foodGettingFunction(e, this.state.userFood) }
                            >
                                <img className="beerTab" src={require("../assets/beerTab.png")} alt="Beer tab" />Show me a beer!
                            </button>
                        </div>
                    </form>
                    <div>
                        <h2>Pick for you</h2>
                            <img className="beerBarrel" src={require("../assets/beerBarrel2.png")} alt="Beer barrel" />
                    </div>
            </section>
        );
    }
}

export default Food;


