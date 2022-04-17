import { ActionTypes } from "../store/types";
import { Users } from "../types/";
import * as saga from "redux-saga/effects";

const fetchUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

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
function* rootSaga(){
  yield saga.all([
    crudSaga,
    logInSaga
  ])
}
export default rootSaga;
