import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import HomePage from './components/homepage';
import ShoppingCart from './components/shoppingcart';
import Store from './components/store';
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.callBackendAPI = this.callBackendAPI.bind(this);
  }

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.data }));
  }

  // fetching the GET route from the Express server which matches the GET route from server.js
      callBackendAPI = async () => {
        const response = await fetch('/getData');
        const body = await response.json();
        if (response.status !== 200) {
          throw Error(body.message);
        }
        return body;
      };

      render() {
        const status = this.state;
        return (
          <Router>
            <div className="hello">
              <h1>hello world</h1>
              <h1>{status.data}</h1>
            </div>
            <div className="switch">
              <div className="switch_header">
                <ul className="nav-bar">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/store">Store</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                </ul>
              </div>
              <Switch>
                <Route path="/shop">
                  <ShoppingCart />
                </Route>
                <Route path="/store">
                  <Store />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
          </Router>
        );
      }
}
