//import { db } from "./firebase.js";
//import { useState } from "react";
//<h3>Gain. Reign. Sustain.</h3>
import Image from "./images/Untitled-Artwork.png"
const Home = () => {

    return ( 
        <div className="homecard">
            <div className="main-statement">
                <h3>Donate Once. Give Forever.</h3>
            </div>
            <p className="align-center-image">
                <img src={Image} class="awesomeImage-thxSister" />
            </p>
            <div className="textbox">
                <button className="donate">
                    Donate
                </button>

                <button className="donate" onClick>
                    I Voted
                </button>
            </div>

        </div>
     );
}
 
export default Home;