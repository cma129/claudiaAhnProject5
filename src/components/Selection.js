import React, { Component } from 'react';

class Selection extends Component {
    constructor() {
        super();
        this.state = {
            oneFoodImg: '',
        }
    }

    // componentDidUpdate() {
    //     this.setState({
    //         oneFoodImg: this.props.oneFoodImg
    //     })
    // }
    render() {
        return(
            <section className="Selection">
                <h2>My Beer Selection</h2>
                <div className="barrelContainer">
                    <img className="beerBarrel beerBarrelSelection" src={ this.props.oneFlavourImg ? this.props.oneFlavourImg: require ("../assets/beerBarrel3.png") } alt="Beer barrel" />
                    <img className="beerBarrel beerBarrelSelection" src={ this.props.oneFoodImg ? this.props.oneFoodImg : require("../assets/beerBarrel3.png") } alt="Beer barrel" />
                    <img className="beerBarrel beerBarrelSelection" src={require("../assets/beerBarrel3.png")} alt="Beer barrel" />
                </div>
            </section>
        );
    }
}

export default Selection;


