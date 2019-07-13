import React from 'react';
import './App.css';
import Nav from './components/nav'
import About from './components/about'
import Home from './components/home'
import Shop from './components/shop'
import ItemDetail from './components/itemDetail'
import {Route, BrowserRouter as Router , Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/shop' exact component={Shop}/>
          <Route path='/shop/:id' component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
