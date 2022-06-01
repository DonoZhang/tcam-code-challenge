import { APPSTATUS,TRANSACTION_STATUS } from "../constants"
import * as actionTypes from "./actionTypes"

export const updateAppStatus = (appStatus: AppStatusType) => ({
  type: actionTypes.UPDATE_STATUS,
  appStatus
})

export const updateBalance = (balance: number) => ({
  type: actionTypes.UPDATE_BALANCE,
  balance
})

export const updateHistory = (record: IRecord) =>({
  type: actionTypes.UPDATE_HISTORY,
  record
})

export const TopUp = (payload: ITransactionRequest) => async (dispatch: Function) => {
  dispatch(updateAppStatus(APPSTATUS.LOADING))
  try {
    const data = await simulateRequest(payload)
    dispatch(updateAppStatus(APPSTATUS.LOADED))
    dispatch(updateBalance(data.balance))
    dispatch(updateHistory(data))
  } catch(error) {
    dispatch(updateAppStatus(APPSTATUS.ERROR))
    const record = {
      value: payload.value,
      type: payload.type,
      status: TRANSACTION_STATUS.FAILURE,
      sender: payload.sender,
      recipient: payload.recipient,
      timestamp: Date.now(),
      balance: payload.balance,
    }
    dispatch(updateHistory(record))
  }
}

// API Mocking
const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
const simulateRequest = async (payload: ITransactionRequest) => {
  await sleep(1000)
  let balance = payload.balance
  switch (payload.type) {
    case TransactionType.Pay: {
      if (payload.balance >= payload.value) {
        balance -= payload.value
        break
      } else
        throw Error("Insufficient balance")
    }
    case TransactionType.TopUp:
    default:
      balance += payload.value
  }

  const response:IRecord = {
    value: payload.value,
    type: payload.type,
    status: TRANSACTION_STATUS.SUCCESS,
    sender: payload.sender,
    recipient: payload.recipient,
    timestamp: Date.now(),
    balance,
  }
  return response
}