import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class HomeContainer extends Component {
  render() {
    const { auth } = this.props;

    return (
      <div className="home-page-view">
        <Navbar auth={auth} />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  auth: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export { HomeContainer };
export default connect(mapStateToProps, { /* actions */ })(HomeContainer);
