import React, { Component } from 'react';

import CaLogo from "../assets/caLogo.png";
import Logo from"../assets/logo.png";
import BeerBarrel2 from "../assets/beerBarrel2.png";
import BeerTab from "../assets/beerTab.png";

class Header extends Component {
    render() {
        return(
            <header className="Header wrapper">
                <section className="topHeader">
                    <a href="http://claudiaahn.com" target="_blank"><img className="caLogo" src={CaLogo} alt="claudiaahn.com" /></a>
                    <div className="top">
                        <div className="intro">
                            <h1>
                                <div className="myBeer">
                                    My<span className="space"></span>Beer <img className="logo" src={Logo} alt="logo" />
                                </div>
                                Selection
                            </h1>
                            <h3>Use this app to create your own beer selection based on your personal taste!</h3>                    
                        </div>
                        <div className="buttonContainer">
                            <a href="#instructions" className="button startGot"
                                >
                                    <img className="beerBarrel2" src={BeerBarrel2} alt="Beer barrel" />Get Started
                                </a>  
                        </div>
                    </div>
                </section>
                <section className="bottomHeader" id="instructions">
                    <ol>
                        <li>Below, there are TWO separate sections where you where can get a beer recommended. You can use just one or both.</li>
                        <li>
                            <p>If you know what kind of flavour you want, choose one flavour from the options and hit 'show me a beer' button.</p>
                            <p>OR, if you have a food pairing in mind, type that food in and hit 'show me a beer' button.</p>
                        </li>
                        <li>If you really like the beer we picked for you, click the '+' button on the beer to add it to your selection.</li>
                    </ol>
                    <div className="buttonContainer">
                        <a href="#picks" className="button startGot"
                                    >
                                        <img className="beerTab" src={BeerTab} alt="Beer tab" />Got it
                                    </a>  
                    </div>
                </section>


            </header>
        );
    }
}

export default Header;