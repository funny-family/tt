import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

function Avatar(props) {
  return (
    <div>
      <img
        className="avatar-container"
        src={ props.src }
        alt="user avatar"
      />
    </div>
  );
}

Avatar.prototype = {
  src: PropTypes.string
};

export default Avatar;
