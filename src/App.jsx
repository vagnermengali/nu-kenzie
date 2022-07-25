import Interface from './components/Interface/';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Homepage from './components/Homepage';
import { useState } from 'react';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [listTransactions, setlistTransactions] = useState([])
  function Login() {
    setIsLoggedIn(true)
 }
 function Logout() {
   setIsLoggedIn(false)
 }
  return (
    <div className="App">
      {isLoggedIn ? (
        <div>      
          <Header Logout={Logout}/>
          <div className="containerMain"> 
            <div className="main">
              <Form listTransactions={listTransactions} setlistTransactions={setlistTransactions}/>
              <List listTransactions={listTransactions} setlistTransactions={setlistTransactions}/>
            </div>
          </div>
        </div>
      ):( 
        <Interface Login={Login}/>
      )}
    </div>
  );
}

export default App;
