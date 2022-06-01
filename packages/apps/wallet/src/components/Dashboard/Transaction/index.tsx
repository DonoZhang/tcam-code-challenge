import React from 'react'

import Pay from './Pay'
import TopUp from './TopUp'

import * as styles from './styles'

export default () => {
    return (
        <div className={styles.transactionContainer}>
           <Pay />
           <TopUp />
        </div>
    )
}