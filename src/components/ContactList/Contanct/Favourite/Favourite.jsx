import React from 'react';
import PropTypes from 'prop-types';

import './Favourite.css';

function Favourite(props) {
  const iconSize = 24;

  return (
    <>
      {
        props.isFavourite ?
        <svg
          className="icon-favourite"
          width={ iconSize }
          height={ iconSize }
          viewBox="0 0 154 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M77 0L94.9611 55.2786H153.085L106.062 89.4427L124.023 144.721L77 110.557L29.9772
            144.721L47.9383 89.4427L0.915482 55.2786H59.0389L77 0Z" fill="#3E2093"/>
        </svg> :

        <svg
          className="icon-favourite"
          width={ iconSize }
          height={ iconSize }
          viewBox="0 0 154 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M77 6.47214L93.059 55.8967L93.508 57.2786H94.9611H146.929L104.886 87.8247L103.711
            88.6788L104.16 90.0608L120.219 139.485L78.1756 108.939L77 108.085L75.8244 108.939L33.7814
            139.485L49.8404 90.0608L50.2894 88.6788L49.1139 87.8247L7.07085
            57.2786H59.0389H60.492L60.941 55.8967L77 6.47214Z" stroke="#3E2093" strokeWidth="10"/>
        </svg>
      }
    </>
  );
}

Favourite.prototype = {
  isFavourite: PropTypes.bool
};

export default Favourite;
