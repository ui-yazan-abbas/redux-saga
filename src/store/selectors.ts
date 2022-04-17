import { createSelector } from "reselect";

const getUsers = (state: any) => state.usersReducer.users;

export const selectUsers = createSelector(getUsers, users => users)
export const selectHasUsers = createSelector(getUsers, users => users.length > 0)