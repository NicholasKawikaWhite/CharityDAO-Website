const Donate = () => {
    return ( 
        <div className="donate-screen">
            <h1>Make a Donation</h1>
            <div className="input-field">
                <div className="fineprint">
                    * Minimum donation is .01 AVAX
                </div>
            <input text="hello" type="number" className="value-int-field"/>
            <div className="donate-button">
                <button className="donateBtn">
                    Donate
                </button>
            </div>
            </div>
        </div>
     );
}
 
export default Donate;