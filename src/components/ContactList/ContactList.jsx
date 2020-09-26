import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchUsersData } from '../../store/actions/fetch-users';

import Loader from '../Loader/Loader';

function ContactList() {
  const dispatch = useDispatch();

  const usersListLoadingState = useSelector((state) => state.users.loading);
  const usersList = useSelector((state) => state.users.list);

  function showUsers(event) {
    event.preventDefault();

    dispatch(fetchUsersData());
  }

  console.log(usersList);
  // console.log(usersList[0]?.name);
  // console.log(usersListLoadingState);

  return (
    <div>
      <Loader />
      <form
        onSubmit={ showUsers }
      >
        <button type="submit">show users in console</button>
      </form>
      {
        usersListLoadingState ? <Loader /> : <div>{ JSON.stringify(usersList[0]) }</div>
      }
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     usersList: state.users.list,
//     usersListLoadingState: state.users.loading
//   };
// };

export default connect()(ContactList);
