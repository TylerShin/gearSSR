import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Rdialog from '../components/Rdialog/Rdialog';
// Import Action Creators
import { signUp } from 'actions/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const passwordConfirmation = this.refs.passwordConfirmation.value;

    this.props.signUp(email, password, passwordConfirmation);
  }

  render() {
    const { isOpen, closeFunc } = this.props;
    return (
      <Rdialog isOpen={isOpen} closeFunc={closeFunc}>
        <div className="modal-header">
          회원가입
        </div>
        <form onSubmit={this.handleSignUp}>
          <div className="modal-body">
            <div>
              <input
                type="email"
                ref="email"
                placeholder="E-MAIL 이메일"
                className="g-input"
              />
            </div>
            <div>
              <input
                type="password"
                ref="password"
                placeholder="PASSWORD 암호"
                className="g-input"
              />
            </div>
            <div>
              <input
                type="password"
                ref="passwordConfirmation"
                placeholder="PASSWORD CONFIRAMTION 암호확인"
                className="g-input"
              />
            </div>
          </div>
          <div className="modal-footer clearfix">
            <button
              onClick={closeFunc}
              className="g-flat-button"
              type="button"
            >취소
            </button>
            <button className="g-flat-button" type="submit">제출</button>
          </div>
        </form>
      </Rdialog>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeFunc: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

export { SignUp };
export default connect(mapStateToProps, { signUp })(SignUp);
