import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

// button styleTypes: bordered, accent, regular
function Button(props) {
  let buttonStyletype = '';
  if (props.styleType === 'bordered') {
    buttonStyletype = 'bordered'
  } else if (props.styleType === 'accent') {
    buttonStyletype = 'accent';
  } else {
    buttonStyletype = 'regular' // as default button style type
  }

  return (
    <button
      className={
        `${buttonStyletype}-button btn`
      }
      type={ props.type }
    >
      {props.children}
    </button>
  );
}

Button.prototype = {
  type: PropTypes.string,
  styleType: PropTypes.string
};

export default Button;
