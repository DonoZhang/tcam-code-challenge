import { APPSTATUS,TRANSACTION,TRANSACTION_STATUS } from "../constants"
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

export const transaction = (payload: ITransactionRequest) => async (dispatch: Function, getState: Function) => {
  dispatch(updateAppStatus(APPSTATUS.LOADING))
  const balance = getState().balance
  try {
    const data = await simulateRequest(payload, balance)
    dispatch(updateAppStatus(APPSTATUS.LOADED))
    dispatch(updateBalance(data.balance))
    dispatch(updateHistory(data))
  } catch(error) {
    console.log(error)
    dispatch(updateAppStatus(APPSTATUS.ERROR))
    const record = {
      value: payload.value,
      type: payload.type,
      status: TRANSACTION_STATUS.FAILURE,
      sender: payload.sender,
      recipient: payload.recipient,
      timestamp: Date.now(),
      balance,
    }
    dispatch(updateHistory(record))
  }
}

// API Mocking
const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
const simulateRequest = async (payload: ITransactionRequest, balance: number) => {
  await sleep(1000)
  let newBalance = balance
  switch (payload.type) {
    case TRANSACTION.PAY: {
      if (balance >= payload.value) {
        newBalance -= payload.value
        break
      } else {
        throw Error("Insufficient balance")
      }
    }
    case TRANSACTION.TOPUP:
    default:
      newBalance += payload.value
  }

  const response:IRecord = {
    value: payload.value,
    type: payload.type,
    status: TRANSACTION_STATUS.SUCCESS,
    sender: payload.sender,
    recipient: payload.recipient,
    timestamp: Date.now(),
    balance: newBalance,
  }
  return response
}