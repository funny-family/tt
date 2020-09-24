import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../store/user/actions/fetch-users';

function Contacts({ dispatch }) {

  function showUsers(event) {
    event.preventDefault();
    console.log('showUsers is work!');
    dispatch(fetchUsersData());
  }

  return (
    <div className="">
      <form
        onSubmit={ showUsers }
      >
        <button type="submit">show users in console</button>
      </form>
    </div>
  );
}

export default connect()(Contacts);
