import React, { useEffect } from "react";
import './Header.css';
import Header from "./Header";
import Home from "./Home";
import './Home.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import Orders  from "./Orders";

const promise =loadStripe(
  "pk_test_51JJFGhSDz0N4YjpVopC8Q1AIPXiY1fyqRkU8StqoQvzlOzq4r3AbT1PA9pDxjPx1eLsi2SML9Ye0QOwrBZ0eGrNh002wC9c8f1"
);

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        // the user just logged in / the user was logged in
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
      }else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    // BEM
    <Router>
    <div className="app">
      
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/orders">
          <Header/>
          <Orders/>
        </Route>
        
        <Route path= "/checkout">
          {/* Header */}
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
         
          
        </Route>

        <Route path="">
              {/* Header */}
              <Header/>
              {/*Home*/}
              <Home/>
        </Route>
     

      </Switch>
    </div>
    </Router>
  );
}

export default App;
