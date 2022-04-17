import { combineReducers } from "redux";
import { ActionTypes } from "./types";

const usersReducer = (state = { users: [] }, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ usersReducer });

export default rootReducer;
