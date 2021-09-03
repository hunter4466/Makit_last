import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import HomePage from './components/homepage';
import ShoppingCart from './components/shoppingcart';
import Store from './components/store';

const App = () => (
  <Router>
    <div className="hello">
      <h1>Makit App</h1>
    </div>
    <div className="switch">
      <div className="switch_header">
        <ul className="nav-bar">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/shop">Shoping Cart</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/shop">
          <ShoppingCart />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
