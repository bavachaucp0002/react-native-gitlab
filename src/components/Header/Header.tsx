import React, { PureComponent } from "react"
import { Header, Avatar } from "react-native-elements"
import { HeaderProps } from "react-navigation-stack"
import { UserReduxProps, withRedux } from "/screens/AppLoading/redux"
import { compose } from "redux"
import { View, Text } from "react-native"
import { NavigationContainerProps } from "react-navigation"
import { Routes } from "/routers/routes"
import { color } from "/configs"

interface Props extends NavigationContainerProps, UserReduxProps {
  headerProps: HeaderProps
  title: string
}

class AppHeader extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)

    this.renderRightComponent = this.renderRightComponent.bind(this)
  }

  renderRightComponent() {
    const { user, navigation } = this.props

    const _onPress = () => navigation && navigation.navigate && navigation.navigate(Routes.ACCOUNT)

    return (
      <View>
        {user.userInfo && user.userInfo.avatar_url ? (
          <Avatar
            rounded
            source={{ uri: user.userInfo.avatar_url }}
            // onPress={_onPress}
            // onLongPress={_onPress}
          />
        ) : (
          <Avatar
            rounded
            title={user.userInfo && user.userInfo.username ? user.userInfo.username.charAt(0) : "G"}
            // onPress={_onPress}
            // onLongPress={_onPress}
          />
        )}
      </View>
    )
  }

  render() {
    const { title } = this.props

    return (
      <Header
        rightComponent={this.renderRightComponent()}
        centerComponent={{ text: title, style: { color: color.white } }}
      />
    )
  }
}

export default compose(withRedux)(AppHeader)
