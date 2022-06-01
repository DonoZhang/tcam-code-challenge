import React from 'react'
import Money from 'tcam-money'
import { connect } from 'react-redux'

import * as styles from './styles'

interface BalanceType {
    value: number
    abbreviation?: string
    symbol?: string
}

const Balance:React.FunctionComponent<BalanceType> = ({
    value,
    abbreviation = "A",
    symbol = "$"
}) => {
    return (
        <div className={styles.balance}>
            <Money abbreviation={abbreviation} symbol={symbol} value={value} />
        </div>
    )
}

const mapStateToProps = (state:IState) => ({
    value: state.balance
})

export default connect(
    mapStateToProps,
    null
)(Balance)
// TODO: Connect to redux