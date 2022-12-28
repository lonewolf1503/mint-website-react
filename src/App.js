import { useState } from 'react';
import MainMint from './MainMint';
import NavBar from './NavBar';

import './App.css';

function App() {
  const [accounts,setAccounts] = useState([]);
  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
