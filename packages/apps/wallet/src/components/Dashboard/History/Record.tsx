import React from 'react'
import Money from 'tcam-money'
import { Time } from 'tcam-utils'

import { TransactionType, StatusType } from '../../../constants'

import * as styles from './styles'

interface RecordType {
    value: number
    type: TransactionType
    status: StatusType
    sender: string
    recipient: string
    timestamp: number
}

const Record:React.FunctionComponent<RecordType> = ({
    value,
    type,
    status,
    sender,
    recipient,
    timestamp
}) => {
    
    return (
        <div className={styles.record(status)} key={timestamp}>
            <span className='status'>{status}</span>
            <span>From {sender} to {recipient}</span>
            <span>{type}</span>
            <Money value={value} symbol="$" abbreviation="A" />
            <span>{Time.formatTimeStamp(timestamp)}</span>
        </div>
    )
}

export default Record
// TODO: Connect to redux