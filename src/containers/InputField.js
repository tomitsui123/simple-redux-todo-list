import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class InputField extends Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addTodo(this.input.value))
    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input placeholder="type something" ref={node => this.input = node} />
        <button>Submit</button>
      </form>
    )
  }
}

export default connect()(InputField);