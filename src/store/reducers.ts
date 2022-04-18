import { combineReducers } from "redux";
import { ActionTypes } from "./types";

const LoggedInReducer = (state = { loggedIn: false }, action: any) => {
  switch (action.type) {
    case ActionTypes.LOG_IN_SUCCESS:
      return { ...state, loggedIn: action.loggedIn };
    default:
      return state;
  }
};

const usersReducer = (state = { users: [] }, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ usersReducer, LoggedInReducer });

export default rootReducer;
