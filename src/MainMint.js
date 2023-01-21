import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import RoboPunkNFT from "./RoboPunkNFT.json";

const roboPunkNFTAddress = "0x8356C46C15Fb4cbD970ADD4C982907E8466bf647";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmmount, setMintAmmount] = useState(1);
  const isConnectd = Boolean(accounts[0]);

  async function handelMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        roboPunkNFTAddress,
        RoboPunkNFT.abi,
        signer
      );

      try {
        const response = await contract.mint(BigNumber.from(mintAmmount), { 
            value: ethers.utils.parseEther("0.1").mul(BigNumber.from(mintAmmount))  });
        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmmount > 1) {
      setMintAmmount(mintAmmount - 1);
    }
  }

  const handleIncrement = () => {
    if (mintAmmount < 3) {
      setMintAmmount(mintAmmount + 1);
    }
  }

  return (
    <div>
  <h1>RoboPunk</h1>
    <p>Lorem30 djkanfadlkmfdk</p>
    
    {isConnectd ? (
        <div>
        <div>
            <button onClick={handleDecrement}>-</button>
            <input type="text" value={mintAmmount} />

            <button onClick={handleIncrement}>+</button>

         </div>
         <button onClick= {handelMint}>Mint Now</button>
    </div>) : ( <p>Not Connect</p>)}



    </div>
  );
};

export default MainMint;