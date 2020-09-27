import React from 'react';
import PropTypes from 'prop-types';

import './Contanct.css';

import Avatar from './Avatar/Avatar';

function Contanct(props) {
  return (
    <div className="contact-container">
      <div>name: { props.name }</div>
      <div>username: { props.username }</div>
      <div>email: { props.email }</div>

      <p>address:</p>
      <ul>
        <li>city: { props.city }</li>
        <li>state: { props.state }</li>
        <li>country: { props.country }</li>
        <li>zipcode: { props.zipcode }</li>
      </ul>

      <br/>

      <p>company:</p>
      <ul>
        <li>business: { props.business }</li>
        <li>catch phrase: { props.catchPhrase }</li>
        <li>company name: { props.companyName }</li>
      </ul>

      <br/>

      <div>phone: { props.phone }</div>
      <div>website: { props.website }</div>

      <br/>

      <Avatar src={ props.avatar } />
      <div>favorite: { props.favorite.toString() }</div>
    </div>
  );
}

Contanct.prototype = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,

  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
  zipcode: PropTypes.string,

  business: PropTypes.string,
  catchPhrase: PropTypes.string,
  companyName: PropTypes.string,

  phone: PropTypes.string,
  website: PropTypes.string,

  favorite: PropTypes.bool,
  avatar: PropTypes.string
};

export default Contanct;
