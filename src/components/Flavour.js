import React, { Component } from 'react';

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
                            <button type="submit" onClick={ (e) => this.props.flavourGettingFunction(e, this.state.userFlavour) }
                            >
                                <img className="beerTab" src={require("../assets/beerTab.png")} alt="Beer tab" />Show me a beer!
                            </button>
                        </div>
                    </form>
                    <div>
                    <h2>pick for you</h2>
                        <div className="barrelContainer">
                            <img className="beerBarrel" src={require("../assets/beerBarrel.png")} alt="Beer barrel" />
                        </div>
                    </div>
            </section>
        );
    }
}

export default Flavour;