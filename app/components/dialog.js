import React, { Component, PropTypes } from 'react';

class RDialog extends Component {
  render() {
  	/********
  		To Do
			Add animation Logic if want
  	********/
    return (
      <div className="RDialog-wrapper">
	      <div className="RDialog-backdrop">

	      </div>
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
