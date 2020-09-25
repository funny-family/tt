import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../store/actions/fetch-users';

function ContactList({ dispatch }) {

  function showUsers(event) {
    event.preventDefault();
    dispatch(fetchUsersData());
  }

  useEffect(() => {
    //
  });

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
