const initialState = {
  usersContainer: [],
  isDataLoading: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        usersContainer: action.users
      };

    case 'SET_DATA_LOADING':
      return {
        ...state,
        isDataLoading: action.isDataLoading
      };

    default:
      return state;
  }
};

export default users;
