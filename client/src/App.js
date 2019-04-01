import React, { Component } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Form />
      </div>
    );
  }
}

export default App;
