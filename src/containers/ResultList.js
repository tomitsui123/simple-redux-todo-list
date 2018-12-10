import React, { Component } from 'react';
import ResultRow from '../components/ResultRow';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, SHOW_ALL, SHOW_ACTIVE, SHOW_INACTIVE } from '../actions';

class ResultList extends Component {
  render() {
    let { todos, filter, toggleRow, deleteTodo } = this.props;
    let selection = (todo) => {
      switch (filter) {
        case SHOW_ACTIVE:
          return todo.active;
        case SHOW_INACTIVE:
          return !todo.active;
        case SHOW_ALL:
        default:
          return true;
      }
    }
    return (
      <ul>
        {todos.map(todo => selection(todo) ? (
          <ResultRow
            toggleRow={() => toggleRow(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            key={todo.id}
            {...todo} />) : ''
          )}
      </ul>
     );
  }
}

const mapStateToProps = ({ todos, filter }) => {
  return {
    todos,
    filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleRow: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);