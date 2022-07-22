import Interface from './components/Interface/';
import Homepage from './components/Homepage';
import { useState } from 'react';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function Login() {
    setIsLoggedIn(true)
 }
 function Logout() {
   setIsLoggedIn(false)
 }
  return (
    <div className="App">
      {isLoggedIn ? (
        <Homepage Logout={Logout}/>
      ):( 
        <Interface Login={Login}/>
      )}
      
    </div>
  );
}

export default App;
