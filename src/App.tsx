import "/locales/i18n"

import React, { PureComponent } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import AppNavigator from "/routers"
import { persistor, store } from "/redux/store"

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}
