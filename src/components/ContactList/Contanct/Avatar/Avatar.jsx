import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

function Avatar(props) {
  return (
    <img
      className="avatar-container"
      src={ props.src }
      alt="user avatar"
    />
  );
}

Avatar.prototype = {
  src: PropTypes.string
};

export default Avatar;
