import React from 'react'

import Balance from './Balance'
import Transaction from './Transaction'
import History from './History'
import Loader from '../Loader'

import * as styles from './styles'

export default () => {
    return (
        <div className={styles.dashboardContainer}>
            <Balance value={0} />
            <Transaction />
            <History />         
            <Loader />
        </div>
    )
}