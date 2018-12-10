import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { statusList, toggleFilter } from '../actions';

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired
  }
  render() {
    let { filter } = this.props;
    return <div>
      {statusList.map((status, idx) => (
        <button
          key={idx}
          disabled={status.type === filter}
          onClick={() => this.props.dispatch(toggleFilter(status.type))}
        >
          {status.text}
        </button>
      ))}
    </div>;
  }
}

const mapStateToProps = ({ filter }) => ({
  filter
})

export default connect(mapStateToProps)(Filter);