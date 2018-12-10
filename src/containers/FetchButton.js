import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodo } from '../actions';

class FetchButton extends Component {
  render() {
    return <button onClick={() => this.props.dispatch(fetchTodo())}>Fetch Data !!!</button>;
  }
}

export default connect()(FetchButton);