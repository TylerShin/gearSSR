import React, { Component, PropTypes } from 'react';
import RdialogStyle from './RdialogStyle';

class Rdialog extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { closeFunc } = this.props;

    closeFunc();
  }


  render() {
    const { isOpen, closeFunc } = this.props;

    return (
      <div className="RDialog-wrapper" style={RdialogStyle.dialogStyle(isOpen)}>
        <div
          className="RDialog-backdrop"
          style={RdialogStyle.backdropStyle()}
          onClick={closeFunc}
        ></div>
        <div className="RDialog-modal-wrapper" style={RdialogStyle.modalBodyStyle(isOpen)}>
          {this.props.children}
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
