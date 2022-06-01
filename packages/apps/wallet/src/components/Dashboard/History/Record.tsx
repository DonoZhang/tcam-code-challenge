import React from 'react'
import Money from 'tcam-money'
import { Time } from 'tcam-utils'

import * as styles from './styles'

const Record:React.FunctionComponent<IRecord> = ({
    value,
    type,
    status,
    sender,
    recipient,
    timestamp,
    balance
}) => {
    
    return (
        <div className={styles.record(status)} key={timestamp}>
            <span className='status'>{status}</span>
            <span>{type}</span>
            <Money value={value} symbol="$" abbreviation="A" />
            <span>From {sender} to {recipient}</span>
            <span>Left: </span>
            <Money value={balance} symbol="$" abbreviation="A" />
            <span>{Time.formatTimeStamp(timestamp)}</span>
        </div>
    )
}

export default Record
// TODO: Connect to redux