import AsyncStorage from "@react-native-community/async-storage"
import { ReduxLoggerOptions } from "redux-logger"
import { PersistConfig } from "redux-persist"
import { SagaMiddlewareOptions } from "redux-saga"
import { AppReducerType } from "./types"

export const loggerOptions: ReduxLoggerOptions = {
  collapsed: true,
  duration: true,
  timestamp: true
}

export const sagaOptions: SagaMiddlewareOptions = {}

export const persistOptions: PersistConfig<unknown> = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [AppReducerType.USER]
}
