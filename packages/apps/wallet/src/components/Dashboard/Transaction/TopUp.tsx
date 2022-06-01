import React from 'react'
import Button from 'tcam-button'
import * as styles from './styles'
import { HandleClick } from './index'
import { TRANSACTION } from '../../../constants'

interface TopUpProp {
    handleClick: HandleClick
}

const TopUp:React.FunctionComponent<TopUpProp> = ({
    handleClick
}) => {
    const onClick = () => {
        handleClick({
            _type: TRANSACTION.TOPUP,
            _recipient: 'self',
            _sender: ''
        })
    }
    return (
        <Button className={styles.button} onClick={onClick}>{TRANSACTION.TOPUP}</Button>
    )
}

export default TopUp