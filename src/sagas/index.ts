import { ActionTypes } from "../store/types";
import { Users } from "../types/";
import * as saga from "redux-saga/effects";

const fetchUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

function* workGetUsers() {
  const users:Users = yield saga.call(fetchUsers);
  yield saga.put({ type: ActionTypes.GET_USERS_SUCCESS, users });
}

function* mySaga() {
  yield saga.takeEvery(ActionTypes.GET_USERS_FETCH, workGetUsers);
}
export default mySaga;
