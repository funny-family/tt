export const setLoadingState = (loadingState) => ({
  type: 'SET_DATA_LOADING',
  loadingState
});

export const fetchUsersData = () => async (dispatch) => {
  dispatch(setLoadingState(true));

  const url = 'http://demo.sibers.com/users';
  const response = await fetch(url, {
    method: 'GET',
  });
  
  if (response.ok) {
    const users = await response.json();
    dispatch(setUsers(users));

    dispatch(setLoadingState(false));
  } else {
    console.log('Falid to fetch users data!');
  }
};

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});
