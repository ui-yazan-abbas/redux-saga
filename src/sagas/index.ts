import { ActionTypes } from "@store/types";
import * as saga from "redux-saga/effects";
import { Users } from "types/";

const fetchUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

const logInAndOut = (state: boolean) => !state;

function* workGetUsers() {
  const users: Users = yield saga.call(fetchUsers);
  yield saga.put({ type: ActionTypes.GET_USERS_SUCCESS, users });
}

function* crudSaga() {
  yield saga.takeEvery(ActionTypes.GET_USERS_FETCH, workGetUsers);
}

function* workLogIn() {
  const loggedIn = true;
  yield saga.put({ type: ActionTypes.LOG_IN_SUCCESS, loggedIn });
}

function* logInSaga() {
  yield saga.takeEvery(ActionTypes.LOG_IN, workLogIn);
}

const rootSaga = () =>
  function* rootSaga() {
    yield saga.all([crudSaga(), logInSaga()]);
  };
  
export default rootSaga;
