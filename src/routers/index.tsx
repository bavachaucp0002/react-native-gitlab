import React, { PureComponent } from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { UserReduxProps, withRedux } from "/screens/AppLoading/redux"
import { compose } from "redux"
import { Routes } from "./routes"
import { AppLoading, Repositories } from "/screens"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { Icon } from "react-native-elements"
import { createStackNavigator, HeaderProps } from "react-navigation-stack"
import { lang } from "/locales"
import { Header } from "/components"

interface Props extends UserReduxProps {}

class AppRoute extends PureComponent<Props> {
  render() {
    const { user } = this.props

    const Layout = createAppContainer(
      createSwitchNavigator(
        {
          [Routes.APP_LOADING]: AppLoading,
          [Routes.MAIN_PAGE]: createBottomTabNavigator(
            {
              [Routes.REPOSITORY]: {
                screen: createStackNavigator({
                  [Routes.REPOSITORY]: {
                    screen: Repositories,
                    navigationOptions: {
                      header: (headerProps: HeaderProps) => {
                        return <Header headerProps={headerProps} title={lang.repositories.title} />
                      }
                    }
                  }
                }),
                navigationOptions: {
                  title: lang.repositories.title,
                  tabBarIcon: ({ tintColor }) => {
                    return <Icon name="ios-folder" type="ionicon" color={tintColor} />
                  }
                }
              },
              [Routes.ISSUES]: {
                screen: createStackNavigator({
                  [Routes.REPOSITORY]: {
                    screen: Repositories,
                    navigationOptions: {
                      header: (headerProps: HeaderProps) => {
                        return <Header headerProps={headerProps} title={lang.issues.title} />
                      }
                    }
                  }
                }),
                navigationOptions: {
                  title: lang.issues.title,
                  tabBarIcon: ({ tintColor }) => {
                    return <Icon name="ios-bug" type="ionicon" color={tintColor} />
                  }
                }
              },
              [Routes.MERGE_REQUEST]: {
                screen: createStackNavigator({
                  [Routes.REPOSITORY]: {
                    screen: Repositories,
                    navigationOptions: {
                      header: (headerProps: HeaderProps) => {
                        return <Header headerProps={headerProps} title={lang.merge_request.title} />
                      }
                    }
                  }
                }),
                navigationOptions: {
                  title: lang.merge_request.title,
                  tabBarIcon: ({ tintColor }) => {
                    return <Icon name="ios-git-merge" type="ionicon" color={tintColor} />
                  }
                }
              },
              [Routes.TODO]: {
                screen: createStackNavigator({
                  [Routes.REPOSITORY]: {
                    screen: Repositories,
                    navigationOptions: {
                      header: (headerProps: HeaderProps) => {
                        return <Header headerProps={headerProps} title={lang.todo.title} />
                      }
                    }
                  }
                }),
                navigationOptions: {
                  title: lang.todo.title,
                  tabBarIcon: ({ tintColor }) => {
                    return <Icon name="ios-list" type="ionicon" color={tintColor} />
                  }
                }
              }
            },
            {
              initialRouteName: Routes.REPOSITORY
            }
          )
        },
        {
          initialRouteName: user.isAuth ? Routes.MAIN_PAGE : Routes.APP_LOADING
        }
      )
    )

    return <Layout />
  }
}

export default compose(withRedux)(AppRoute)
