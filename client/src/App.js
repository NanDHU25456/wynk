import React, { Component } from 'react';

import Nav from './components/Nav';
import Form1 from './components/Form'
import "antd/dist/antd.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Form1 />
      </div>
    );
  }
}

export default App;
