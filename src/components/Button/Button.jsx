import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

// button styleTypes: bordered, accent, regular
function Button(props) {
  let buttonStyleType = '';

  switch (props.styleType) {
    case 'bordered':
      buttonStyleType = 'bordered';
      break;
  
    case 'accent':
      buttonStyleType = 'accent';
      break;
    
    default:
      buttonStyleType = 'regular'
      break;
  }

  return (
    <button
      className={
        `${buttonStyleType}-button btn ${props.className}`
      }
      type={ props.type }
      onClick={ props.onClick }
      onSubmit={ props.onSubmit }
    >
      {props.children}
    </button>
  );
}

Button.prototype = {
  type: PropTypes.string,
  styleType: PropTypes.string,
  className: PropTypes.string
};

export default Button;
