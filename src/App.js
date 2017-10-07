import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Converter from './Converter';
import Navbar from './Navbar';

class App extends Component {

  constructor() {
    super();

    this.state = {
      latest: [],
      currencies: []
    };

    this.getLatest();
  }

  getLatest() {
    fetch("http://mgm-currency-converter.herokuapp.com/")
      .then(result => result.json())
      .then(items => {
        console.log(items);
        this.setState({ latest: items, currencies: Object.keys(items.rates) });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div class="container">
          <div class="row justify-content-md-center">
            <Converter currencies={this.state.currencies} />  
          </div>      
          
          <pre>
            <p>Developed by Mateus Gabi Moreira</p>
            <p>API Updated in {this.state.latest.date}</p>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;
