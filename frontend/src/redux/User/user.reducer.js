import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  user: {},
  isLoggedIn: false,
  isUserUpdate: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        user: action.payload,
        isLoggedIn: true,
      };

    case userActionTypes.LOGOUT:
      return {
        user: {},
        isLoggedIn: false,
      };
    case userActionTypes.USER_UPDATE:
      return {
        ...state,
        isUserUpdate: !state.isUserUpdate,
      };

    default:
      return state;
  }
};

export default userReducer;
