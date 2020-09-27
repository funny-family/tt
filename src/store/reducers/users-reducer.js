const initialState = {
  list: [],
  isLoading: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        list: action.users
      };

    case 'SET_DATA_LOADING':
      return {
        ...state,
        isLoading: action.loadingState
      };

    default:
      return state;
  }
};

export default users;
