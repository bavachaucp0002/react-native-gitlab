import { call, all, put, takeEvery } from "redux-saga/effects"

import User from "/models/User"

import { ACCOUNT_LOGIN_SUCCESS, ACCOUNT_LOGIN_FAIL, ACCOUNT_LOGIN } from "./types"
import { getUserInfo } from "/apis/user"

export function* getMe() {
  try {
    const user: User = yield call(getUserInfo)

    yield put({
      type: ACCOUNT_LOGIN_SUCCESS,
      payload: user
    })
  } catch (e) {
    yield put({
      type: ACCOUNT_LOGIN_FAIL,
      error: e.message
    })
  }
}

function* watchGetMe() {
  yield takeEvery(ACCOUNT_LOGIN, getMe)
}

export default function* userSaga() {
  yield all([watchGetMe()])
}
