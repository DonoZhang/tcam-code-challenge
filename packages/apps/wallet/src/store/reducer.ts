import * as actionTypes from "./actionTypes"
import { APPSTATUS } from '../constants'

const initialState: IState = {
  balance: 0,
  history: [],
  appStatus: APPSTATUS.LOADING,
}

const reducer = (
  state: IState = initialState,
  action: IAction
): IState => {
  switch (action.type) {
    case actionTypes.UPDATE_STATUS:
      return {
        ...state,
        appStatus: action.appStatus,
      }
    case actionTypes.UPDATE_BALANCE:
      return {
        ...state,
        balance: action.balance
      }
    case actionTypes.UPDATE_HISTORY: {
      const { history } = state
      history.push(action.record)
      return {
        ...state,
        history,
      }
    }
    default:
      return state
  }
}

export default reducer