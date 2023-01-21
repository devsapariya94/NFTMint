import './App.css';
import { useState } from 'react';
import MainMint from './MainMint';
import NavBar from './NavBar'
function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="overLay">
    <div className="App">
      <NavBar accounts = {accounts} setAccounts= {setAccounts}/>
      <MainMint accounts = {accounts} setAccounts= {setAccounts}/>
    </div>

    <div className="movingBackground"> </div>
    </div>
  );
} 

export default App;
