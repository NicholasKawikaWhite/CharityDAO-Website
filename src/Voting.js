import { useState } from "react/cjs/react.development";
const Voting = () => {
    const [option, setOption] = useState([
        {title: ""},
        {title: ""},
        {title: ""},
        {title: ""},
        {title: ""},
    ]);
    return ( 
        <div className="voting-screen">
            <h1>Ballot</h1>
            <h3>Choose Your Desired Charity<h1>👇</h1>...Then Press Vote<h1>🗳</h1></h3>
        <select name="Choose A Proposal" className="form-control">
            <option>{"Large select"}</option>
            <option>{"Large select"}</option>
            <option>{"Large select"}</option>
            <option>{"Large select"}</option>
            <option>{"Large select"}</option>
        </select>
        <div className="voteBtn">
        <button className="vote">
            Vote
        </button>
        </div>
        </div>
     );
}
 
export default Voting;