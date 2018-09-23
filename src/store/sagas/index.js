import { takeEvery, call, put } from "redux-saga/effects";

const getFollowers = () => {
  return fetch("https://api.github.com/users/rahmanfadhil/followers").then(
    data => data.json()
  );
};

function* fetchFollowers(action) {
  try {
    const data = yield call(getFollowers);
    yield put({ type: "FETCH_FOLLOWERS_FULFILLED", payload: data });
  } catch (err) {
    yield put({ type: "FETCH_FOLLOWERS_REJECTED", payload: err });
  }
}

function* sagas() {
  yield takeEvery("FETCH_FOLLOWERS", fetchFollowers);
}

export default sagas;
