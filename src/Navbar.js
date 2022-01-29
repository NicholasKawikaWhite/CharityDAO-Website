import Image from "./images/MMfox.png";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useChain } from "react-moralis";
import { useApiContract } from "react-moralis";
import { useNativeBalance } from "react-moralis";
const Navbar = () => {
    const [name, setName] = useState("Connect MetaMask");
    var balanceData;
    const {Moralis, authenticate, isAuthenticated, isAuthenticating, logout} = useMoralis();
    const addDonator = [{
        "inputs": [],
        "name": "addADonator",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    }
    ];
    const {
        runContractFunction,
        error,
      } = useApiContract({
        address: "0xdad852D7aa933B91b1B8cFC45332b84729E8A30d",
        functionName: "addADonator",
        abi: addDonator,
        params: {},
      });

    const handleClick = () => {
        if(isAuthenticated){
            logout()
            setName("Connect MetaMask");
        }
        if(!isAuthenticated){
            authenticate({ onComplete: () => setName("Disconnect"), signingMessage: "Connect MetaMask To Charity DAO", chainId: 43113 });
            if(isAuthenticated){
                ;
            }
        }

    }
    /*
    async function donate(){
        let options = {
            contractAddress: "0xdad852D7aa933B91b1B8cFC45332b84729E8A30d",
            functionName: "addADonator",
            abi:[{

                "inputs": [],
                "name": "addADonator",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "payable",
                "type": "function"
            }
        ],
            params:{},
            msgValue: Moralis.Uints.Eth(0.1),
        }

    }
    */


    return ( 
        <div className="navbar">
            <h1>Giving DAO </h1>
            <div className="links">
                <a href="/" className="about">
                    About-Us
                </a>
                <a href="/" className="howItWorks">
                    How-It-Works
                </a>
                <a href="https://makaiinhawaii.gitbook.io/giving-dao/" target="blank" className="document">
                    Documentation
                </a>
                
            <button className="signin" onClick={() => {handleClick()}}>
                <img src={Image} class="center"/> {name}
            </button>
            </div>
        </div>
     );
}
 
export default Navbar;