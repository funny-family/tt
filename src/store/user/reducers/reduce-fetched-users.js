const initialState = {
  usersContainer: [],
  isLoadingUsersData: false
};

const reduceFetchedUsers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        usersContainer: action.payload,
        isLoadingUsersData: true
      };

      case 'SET_USERS_LOADING':
        return {
          ...state,
          isLoadingUsersData: action.payload
        };

    default:
      return state;
  }
};

export default reduceFetchedUsers;
