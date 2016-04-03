import React, { Component, PropTypes } from 'react';

class RDialog extends Component {
  render() {
    const { isOpen, closeFunc } = this.props;
    let activeState = false;

    if (isOpen) {
      activeState = true;
    } else {
      activeState = false;
    }

    /**

    To Do
    Add animation Logic if want

    **/
    return (
      <div className="RDialog-wrapper">
        <div className="RDialog-backdrop" onClick={closeFunc}></div>
        <div className="RDialog-modal-wrapper">
          { this.props.children }
        </div>
      </div>
    );
  }
}

RDialog.propTypes = {
  children: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeFunc: PropTypes.func.isRequired,
};

export default RDialog;
