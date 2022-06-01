interface ITransaction {
    TOPUP: TransactionType
    PAY: TransactionType
}

interface ITransactionStatus {
    SUCCESS: StatusType
    FAILURE: StatusType
}

interface IAppStatus {
    LOADING: AppStatusType
    ERROR: AppStatusType
    LOADED: AppStatusType
}

export const TRANSACTION:ITransaction=  {
    TOPUP: "TopUp" as unknown as TransactionType,
    PAY: "Pay" as unknown as TransactionType
}

export const TRANSACTION_STATUS:ITransactionStatus = {
    SUCCESS: "Success" as unknown as StatusType,
    FAILURE: "Failure" as unknown as StatusType
}

export const APPSTATUS:IAppStatus = {
    LOADING: "LOADING" as unknown as AppStatusType,
    ERROR: "ERROR" as unknown as AppStatusType,
    LOADED: "LOADED" as unknown as AppStatusType,
}