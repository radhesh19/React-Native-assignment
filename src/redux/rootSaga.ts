// sagas/rootSaga.ts
import { all } from "redux-saga/effects";
import { watchFetchData } from "./debitCard/saga";

export default function* rootSaga() {
  yield all([
    watchFetchData(), // 👈 add here
  ]);
}
