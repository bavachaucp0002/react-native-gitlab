import { userSelector } from "/modules/users/selectors"
import { connect } from "react-redux"
import { ReduxScreenProps } from "/utils/types"
import { AppState } from "/redux/reducers"
import { Dispatch, bindActionCreators } from "redux"
import * as userActions from "/modules/users/actions"

export const mapStateToProps = (state: AppState) => ({
  user: userSelector(state)
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)

export type UserReduxProps = ReduxScreenProps<typeof withRedux>
