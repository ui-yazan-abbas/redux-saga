import { createSelector } from "reselect";

const getUsers = (state: any) => state.usersReducer.users;

const loggedIn = (state: any) => state.LoggedInReducer.loggedIn;

export const selectIsLoggedIn = createSelector(
  loggedIn,
  (loggedIn) => loggedIn
);

export const selectUsers = createSelector(getUsers, (users) => users);

export const selectHasUsers = createSelector(
  getUsers,
  (users) => users.length > 0
);
