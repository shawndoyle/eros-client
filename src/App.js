//Libraries
import React, { Component } from 'react';

//Local
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'login',
    }
  }
  render() {
    if(this.state.route === 'home') {
      return <Home logout={this.logout} />;
    } else {
      return <Login login={this.login} />;
    }
  }

  login = () => {
    this.setState({route: 'home'});
  }

  logout = () => {
    this.setState({route: 'login'});
  }
}

export default App;
