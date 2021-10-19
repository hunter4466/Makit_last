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
          <NavLink activeClassName="selected_nav_item" className="nav_item" onClick={() => { handleStoreCloseClick(); }} to="/home">HOME</NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" onClick={() => { handleStoreCloseClick(); }} to="/store">TIENDA</NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" onClick={() => { handleStoreCloseClick(); }} to="/shop">CARRITO</NavLink>
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
