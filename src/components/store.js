import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat_items: null,
      cat_prod: null,
      items: null,
      prod: null,
      prod_cat_items: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.callBackendAPI = this.callBackendAPI.bind(this);
  }

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState(res.data));
  }

    callBackendAPI = async () => {
      const response = await fetch('/getProducts');
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
          <li>
            <Link to="/shop">Home</Link>
          </li>
          <li>
            {status.cat_items}
          </li>
          <li>
            {status.cat_prod}
          </li>
          <li>
            {status.items}
          </li>
          <li>
            {status.prod}
          </li>
          <li>
            {status.prod_cat_items}
          </li>
          <Switch>
            <Route path="/shop">
              ShoppingCart
            </Route>
          </Switch>
        </Router>
      );
    }
}
