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
                    <a href="http://claudiaahn.com" className="caLogo" target="_blank" rel="noopener noreferrer"><img src={CaLogo} alt="claudiaahn.com" /></a>
                    <div className="top">
                        <div className="intro">
                            <h1>
                                <div className="myBeer">
                                    My<span className="space"></span>Beer <img className="logo" src={Logo} alt="logo" />
                                </div>
                                Selection
                            </h1>
                            <h3>Not sure which beer to try? Use this app to create your own beer selection based on your personal taste!</h3>                    
                        </div>
                        <div className="buttonContainer">
                            <a href="#instructions" className="button startGot">
                                <img className="beerBarrel2" src={BeerBarrel2} alt="Beer barrel" />Get Started
                            </a>  
                        </div>
                    </div>
                </section>
                <section className="bottomHeader" id="instructions">
                    <ol>
                        <li>
                            <p>1. Two SEPARATE sections!</p>
                            <p>You don't have to use both.</p>
                        </li>
                        <li>
                            <p>2. Choose a flavour.</p>
                            <p>OR, choose a food pairing.</p>
                        </li>
                        <li>
                            <p>3. You like the beer? Add it to your selection.</p>
                            <p>OR, click 'show me a beer' again or choose something else!</p>
                        </li>
                    </ol>
                    <div className="buttonContainer">
                        <a href="#picks" className="button startGot">
                            <img className="beerTab" src={BeerTab} alt="Beer tab" />Got it
                        </a>  
                    </div>
                </section>
            </header>
        );
    }
}

export default Header;