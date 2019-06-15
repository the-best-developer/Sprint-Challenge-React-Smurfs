import React, { Component } from 'react';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
    
    this.updateSmurfs = this.updateSmurfs.bind(this);
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  updateSmurfs() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState(() => ({smurfs: res.data}));
    })
    .catch(error => {
      console.error("err: " + error);
    });
  }

  componentDidMount() {
    this.updateSmurfs();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route exact path="/smurf-form" render={props => <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />} />
      </div>
    );
  }
}

export default App;
