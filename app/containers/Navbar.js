import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SignIn from './SignIn';
import _ from 'lodash';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignInOpen: false,
      isSignUpOpen: false,
    };

    this.toggleSignInModal = this.toggleSignInModal.bind(this);
    this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
  }

  toggleSignUpModal() {
    const { isSignUpOpen } = this.state;
    this.setState({
      isSignUpOpen: !isSignUpOpen
    });
  }

  toggleSignInModal() {
    const { isSignInOpen } = this.state;
    this.setState({
      isSignInOpen: !isSignInOpen
    });
  }

  render() {
    const { isSignInOpen, isSignUpOpen } = this.state;
    const { auth } = this.props;
    const { currentUser } = auth;

    if (!!currentUser) {
      return (
        <div className="navbar-container header-container clearfix">
          <div className="container">
            <div className="menu-left">
              <Link to="/" activeClassName="active" className="navbar-item">
                Gears
              </Link>
              <Link to="/" activeClassName="active" className="navbar-item">
                뜨는 제품들
              </Link>
              <Link to="/" activeClassName="active" className="navbar-item">
                리뷰
              </Link>
              <Link to="/" activeClassName="active" className="navbar-item">
                마켓
              </Link>
            </div>
            <div className="menu-right">
              <li className="navbar-item">{ currentUser.username }</li>
              <li className="navbar-item" onClick={this.handleLogout}>로그아웃</li>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="navbar-container header-container clearfix">
        <div className="container">
          <div className="menu-left">
            <Link to="/" activeClassName="active" className="navbar-item">
              Gears
            </Link>
            <Link to="/" activeClassName="active" className="navbar-item">
              뜨는 제품들
            </Link>
            <Link to="/" activeClassName="active" className="navbar-item">
              리뷰
            </Link>
            <Link to="/" activeClassName="active" className="navbar-item">
              마켓
            </Link>
          </div>
          <div className="menu-right">
            <li className="navbar-item" onClick={this.toggleSignUpModal}>회원가입</li>
            <li className="navbar-item" onClick={this.toggleSignInModal}>로그인</li>
          </div>
          <SignIn isOpen={isSignInOpen} closeFunc={this.toggleSignInModal} />
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export { Navbar };
export default connect(mapStateToProps, {})(Navbar);
