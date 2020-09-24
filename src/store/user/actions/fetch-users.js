export const loadUsersData = (loadingState) => ({
  type: 'SET_USERS_LOADING',
  loadingState
});

export const fetchUsersData = () => async (dispatch) => {
  dispatch({
    type: 'SET_USERS_LOADING',
    loadingState: false
  });

  // const url = 'http://demo.sibers.com/users';
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const users = await response.json();

    dispatch(setUsers(users));
    console.log(users);
  } else {
    console.log('Falid to fetch users data!');
  }
};

export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users
});
