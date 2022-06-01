import React from 'react'

import Record from './Record'
import { TRANSACTION, TRANSACTION_STATUS } from '../../../constants'

import * as styles from './styles'

interface BalanceType {
    value?: number
    abbreviation?: string
    symbol?: string
}

const Balance:React.FunctionComponent<BalanceType> = ({
    value,
    abbreviation = "A",
    symbol = "$"
}) => {
    return (
        <div className={styles.historyContainer}>
            I am history
            <Record value={1.1} status={TRANSACTION_STATUS.SUCCESS} type={TRANSACTION.TOPUP} sender="testsender" recipient='testrecipient' timestamp={Date.now()} balance={20} />
        </div>
    )
}

export default Balance
// TODO: Connect to redux