import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = {
      data: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.callBackendAPI = this.callBackendAPI.bind(this);
  }

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }));
  }

  // fetching the GET route from the Express server which matches the GET route from server.js
      callBackendAPI = async () => {
        const response = await fetch('/');
        const body = await response.json();

        if (response.status !== 200) {
          throw Error(body.message);
        }
        return body;
      };

      render() {
        const status = this.state;
        return (
          <div className="App">
            <h1>hello world</h1>
            <h1>{status.data}</h1>
          </div>
        );
      }
}

export default App;
