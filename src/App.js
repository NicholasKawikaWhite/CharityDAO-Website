import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect,
} from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Donate from "./Donate";
import Voting from "./Voting";

function App() {
  return (
    <div className="the-map">
      <Navbar/>
      <Home/>
      <Voting/>
    </div>
  );
}

export default App;
