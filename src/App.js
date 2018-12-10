import React, { Component } from 'react';
import './App.css';
import InputField from './containers/InputField';
import ResultList from './containers/ResultList';
import Filter from './containers/Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Redux Todo list!!!</h4>
        <InputField />
        <ResultList />
        <Filter />
      </div>
    );
  }
}

export default App;
