import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import HomePage from './components/homepage';
import ShoppingCart from './components/shoppingcart';
import Store from './components/store';
import { resetCartSwitch } from './redux/cart/cart';
import { resetStore } from './redux/store/store';

const App = () => {
  const dispatch = useDispatch();
  const handleStoreCloseClick = () => {
    dispatch(resetStore());
    dispatch(resetCartSwitch());
  };
  return (
    <Router>
      <div className="hello">
        <h1>Makit App</h1>
      </div>
      <div className="switch">
        <div className="switch_header">
          <ul className="nav-bar">
            <li className="nav-bar-li">
              <Link onClick={() => { handleStoreCloseClick(); }} to="/home">Home</Link>
            </li>
            <li className="nav-bar-li">
              <Link onClick={() => { handleStoreCloseClick(); }} to="/store">Store</Link>
            </li>
            <li className="nav-bar-li">
              <Link onClick={() => { handleStoreCloseClick(); }} to="/shop">Shoping Cart</Link>
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
};

export default App;
