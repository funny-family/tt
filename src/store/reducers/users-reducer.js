const initialState = {
  list: [],
  loading: false
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
        loading: action.loadingState
      };

    default:
      return state;
  }
};

export default users;
