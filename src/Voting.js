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
        <select class="form-control form-control-lg">
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