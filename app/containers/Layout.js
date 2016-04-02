import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Layout extends Component {
  render() {
    return (
      <div className="page-view">
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Layout);
