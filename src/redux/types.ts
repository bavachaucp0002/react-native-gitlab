export enum AppReducerType {
  USER = "user"
}

export enum ReduxStateType {
  INIT = "init",
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
  CANCELLED = "cancelled",
  SUCCESS = "success"
}

export interface ReduxData<T> {
  data: T
  status: ReduxStateType
  error?: Error
}
