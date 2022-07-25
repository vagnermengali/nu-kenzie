import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';
import Interface from '../Interface'
import './style.css'

function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [listTransactions, setlistTransactions] = useState([])
    function Login() {
      setIsLoggedIn(true)
   }
   function Logout() {
     setIsLoggedIn(false)
   }
    return (
        <>
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
        </>
    )
}

export default Dashboard