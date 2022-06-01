import { TRANSACTION, TRANSACTION_STATUS, APPSTATUS } from '../constants'

declare global {
    enum TransactionType {
        TopUp = TRANSACTION.TOPUP,
        Pay = TRANSACTION.PAY
    }
    
    enum StatusType {
        Success = TRANSACTION_STATUS.SUCCESS,
        Failure = TRANSACTION_STATUS.FAILURE
    }
    
    enum AppStatusType {
        LOADING = APPSTATUS.LOADING,
        ERROR = APPSTATUS.ERROR,
        LOADED = APPSTATUS.LOADED,
        PORTAL_OPEN = APPSTATUS.PORTAL_OPEN
    }

    
    interface ITransactionRequest {
        value: number
        type: TransactionType
        sender: string
        recipient: string
    }

    interface IRecord {
        value: number
        type: TransactionType
        status: StatusType
        sender: string
        recipient: string
        timestamp: number
        balance: number
    }

    interface IAction {
        type: string
        [key: string]: any
    }
    
    interface IState {
        balance: number
        history: IRecord[]
        appStatus: AppStatusType
    }
  
}

export {}