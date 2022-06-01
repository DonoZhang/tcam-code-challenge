import { css } from '@emotion/css'
import { colors } from 'tcam-theme'

import { TRANSACTION_STATUS } from '../../../constants'

export const historyContainer = css`
    border: 1px solid ${colors.secondary};
    padding: 5px;
`

export const record = (status: StatusType) => {
    const failed = status === TRANSACTION_STATUS.FAILURE
    const borderColor = failed ? colors.error : colors.info
    const statusColor = failed ? colors.error: colors.success
    
    return  css`
        border: 1px solid ${borderColor};
        border-radius: 5px;
        padding: 2px;
        display: grid;
        grid-template-columns: 70px 50px 60px auto 30px 60px auto;

        & > * {
            display: flex;
            align-items: center;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
        }

        .status {
            color: ${statusColor};
        }
    `
}