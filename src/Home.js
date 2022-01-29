//import { db } from "./firebase.js";
//import { useState } from "react";
//<h3>Gain. Reign. Sustain.</h3>
const Home = () => {

    return ( 
        <div className="homecard">
            <div className="main-statement">
                <h3>Donate Once. Give Forever.</h3>
            </div>
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