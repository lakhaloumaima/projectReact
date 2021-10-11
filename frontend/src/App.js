
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/AdminComponent/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/AdminComponent/Users";

function App() {
  return (
    <div >
       <Router>
        <Navbar />
        <Switch>
        <Route exact path="/home" component={Home} /> 
           
            <Route path="/products" component={Products} /> 
            <Route path="/users" component={Users} />

            <Route path="/" component={Home} /> 
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
