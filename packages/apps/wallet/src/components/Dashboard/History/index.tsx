import React from 'react'

import Record from './Record'
import { TransactionType, StatusType } from '../../../constants'

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
            <Record value={1.1} status={StatusType.Success} type={TransactionType.TopUp} sender="testsender" recipient='testrecipient' timestamp={Date.now()} />
        </div>
    )
}

export default Balance
// TODO: Connect to redux