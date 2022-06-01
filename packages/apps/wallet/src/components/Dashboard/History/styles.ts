import { css } from '@emotion/css'
import { breakpoints, colors } from 'tcam-theme'

import { TRANSACTION_STATUS } from '../../../constants'

export const historyContainer = css`
    border: 1px solid ${colors.secondary};
    padding: 5px;
    min-height: 200px;
    max-height: 380px;
    overflow: auto;
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
        
        @media (min-width: ${breakpoints.md}) {
            grid-template-columns: 100px 1fr 1fr;
        }

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

export const money = css`
    padding-left: 10px;
`