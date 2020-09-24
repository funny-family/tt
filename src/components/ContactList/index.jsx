import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../store/modules/users/actions/fetch-users';

function ContactList({ dispatch }) {

  function showUsers(event) {
    event.preventDefault();
    dispatch(fetchUsersData());
  }

  return (
    <div>
      <form
        onSubmit={ showUsers }
      >
        <button type="submit">show users in console</button>
      </form>
    </div>
  );
}

export default connect()(ContactList);
