import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import Navbar from './component/Navbar';

import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import SignUp from './component/pages/SignUp';
import Footer from './component/pages/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='services' component={Services}/>
        <Route path='products' component={Products}/>
        <Route path='sign-up' component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
    

  );
}

export default App;
