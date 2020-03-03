import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <header className="Header wrapper">
                <a href="http://claudiaahn.com"><img className="cmhLogo" src={require("../assets/cmhLogo.png")} alt="CMH"></img></a>
                <div className="top">
                    <h1>
                        <div className="myBeer">
                            My<span className="space"></span>Beer <img className="logo" src={require("../assets/logo.png")} alt="Beer glass" />
                        </div>
                        Selection
                    </h1>
                    <h3>Use this app to create your own beer selection based on your personal taste!</h3>
                </div>
            </header>
        );
    }
}

export default Header;