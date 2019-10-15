import React, { PureComponent } from "react"
import { Text, ActivityIndicator } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { Icon } from "react-native-elements"
import { UserReduxProps, withRedux } from "./redux"
import { compose } from "redux"
import { NavigationContainerProps } from "react-navigation"
import styles from "./styles"
import User from "/models/User"
import { Routes } from "/routers/routes"

export interface Props extends NavigationContainerProps, UserReduxProps {}

class AppLoading extends PureComponent<Props> {
  componentDidMount() {
    const { userActions, navigation } = this.props

    userActions.login()
  }

  render() {
    return (
      <LinearGradient
        colors={["#48367d", "#241842"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.wrapper}
      >
        <Icon
          name="gitlab"
          type="font-awesome"
          color="#fff"
          size={48}
          containerStyle={styles.icon}
        />
        <ActivityIndicator size="large" style={styles.spinner} />
        <Text style={styles.text}>Loading</Text>
      </LinearGradient>
    )
  }
}

export default compose(withRedux)(AppLoading)
