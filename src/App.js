import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import HomePage from './components/homepage';
import ShoppingCart from './components/shoppingcart';
import Store from './components/store';
import { resetCartSwitch } from './redux/cart/cart';
import { resetStore } from './redux/store/store';
import home from './images/icons/home.svg';
import store from './images/icons/store.svg';
import shoppingcart from './images/icons/shopping_cart.svg';

const App = () => {
  const dispatch = useDispatch();
  const handleStoreCloseClick = () => {
    dispatch(resetStore());
    dispatch(resetCartSwitch());
  };
  return (
    <Router>
      <div className="page_holder">
        <div className="navigator_bar">
          <NavLink activeClassName="selected_nav_item" className="nav_item" onClick={() => { handleStoreCloseClick(); }} to="/home"><img alt="home" src={home} /></NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" onClick={() => { handleStoreCloseClick(); }} to="/store"><img alt="home" src={store} /></NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" onClick={() => { handleStoreCloseClick(); }} to="/shop"><img alt="home" src={shoppingcart} /></NavLink>
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
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
