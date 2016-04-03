import React, { Component, PropTypes } from 'react';

class Rdialog extends Component {
  render() {
    const { isOpen, closeFunc } = this.props;
    const dialogStyle = {
      position: 'fixed',
      visibility: 'hidden',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999,
    };

    const backdropStyle = {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.4)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
    };

    const modalBodyStyle = {
      position: 'absolute',
      backgroundColor: '#fff',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
    };

    /**
    To Do
    Add animation Logic if want
    **/

    if (isOpen) {
      dialogStyle.visibility = 'visible';
    }

    return (
      <div className="RDialog-wrapper" style={dialogStyle}>
        <div className="RDialog-backdrop" style={backdropStyle} onClick={closeFunc}></div>
        <div className="RDialog-modal-wrapper" style={modalBodyStyle}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Rdialog.propTypes = {
  children: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeFunc: PropTypes.func.isRequired,
};

export default Rdialog;
