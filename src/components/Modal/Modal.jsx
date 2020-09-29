import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

import Portal from '../Portal/Portal';
import Button from '../Button/Button';

function Modal(props) {
  return (
    <>
      { props.isOpen &&
        <Portal>
          <div className="modal-overlay">
            <div className="modal-window">
              <div className="modal-body">
                { props.children }
              </div>
              <div className="modal-footer">
                <Button onClick={ props.onSave }>Save</Button>
                <Button onClick={ props.onCancel }>Cancel</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
}

Modal.prototype = {
  isOpen: PropTypes.bool,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node
};

Modal.defaultProps = {
  isOpen: false,
  onSave: () => {},
  onCancel: () => {},
  children: null
};

export default Modal;
