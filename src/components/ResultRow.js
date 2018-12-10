import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResultRow extends Component {
  static propTypes = {
    text: PropTypes.string,
    deleteTodo: PropTypes.func.isRequired,
    toggleRow: PropTypes.func.isRequired
  }
  render() {
    let { text, active, toggleRow, deleteTodo } = this.props;
    return ( 
      <li>
        <span
          onClick={toggleRow}
          style={{ 
            textDecoration: active ? 'none' : 'line-through'
          }}
        >
          {text}
        </span>
        <button onClick={deleteTodo}>delete</button>
      </li>
    );
  }
}

export default ResultRow;