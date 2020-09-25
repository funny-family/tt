export const setLoadingState = (isDataLoading = false) => ({
  type: 'SET_DATA_LOADING',
  isDataLoading
});

export const fetchUsersData = () => async (dispatch) => {
  dispatch({
    type: 'SET_DATA_LOADING',
    loadingState: false
  });

  const url = 'http://demo.sibers.com/users';
  const response = await fetch(url, {
    method: 'GET',
  });

  if (response.ok) {
    const users = await response.json();

    dispatch(setUsers(users));
    // console.log(users);
  } else {
    console.log('Falid to fetch users data!');
  }
};

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});
