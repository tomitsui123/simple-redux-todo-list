import React, { Component } from 'react';
import '../App.css';
import InputField from '../containers/InputField';
import ResultList from '../containers/ResultList';
import Filter from '../containers/Filter';
import FetchButton from '../containers/FetchButton';

class App extends Component {
  render() {
    let { params } = this.props.match;
    return (
      <div className="App">
        <h4>Redux Todo list!!!</h4>
        <FetchButton />
        <InputField />
        <ResultList filter={params.filter || 'SHOW_ALL'} />
        <Filter  filter={params.filter || 'SHOW_ALL'} />
      </div>
    );
  }
}

export default App;
