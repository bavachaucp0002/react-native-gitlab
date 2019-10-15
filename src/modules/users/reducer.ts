import { AnyAction } from "redux"
import User from "/models/User"

import { ACCOUNT_LOGIN, ACCOUNT_LOGIN_SUCCESS, ACCOUNT_LOGIN_FAIL, ACCOUNT_LOGOUT } from "./types"
import { ReduxStateType, ReduxData } from "/redux/types"

interface UserState {
  isAuth: boolean
  userInfo: User | null
}

interface InitState extends ReduxData<UserState> {}

const initState: InitState = {
  data: {
    isAuth: false,
    userInfo: null
  },
  status: ReduxStateType.INIT
}

export default (state: InitState = initState, action: AnyAction): InitState => {
  switch (action.type) {
    case ACCOUNT_LOGIN:
      return { ...state, status: ReduxStateType.LOADING }
    case ACCOUNT_LOGIN_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          isAuth: true,
          userInfo: action.payload
        },
        status: ReduxStateType.SUCCESS
      }
    case ACCOUNT_LOGIN_FAIL:
      return {
        ...state,
        status: ReduxStateType.ERROR,
        error: action.error
      }
    case ACCOUNT_LOGOUT:
      return { ...state, data: { isAuth: false, userInfo: null } }
    default:
      return state
  }
}
