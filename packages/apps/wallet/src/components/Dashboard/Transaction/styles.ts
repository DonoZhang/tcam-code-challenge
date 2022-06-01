import { css } from '@emotion/css'
import { breakpoints } from 'tcam-theme'

export const transactionContainer = css`
    display: grid;
    padding: 10px 0;
    grid-template-columns: 1fr;
    grid-gap: 3px 0;
    

    @media (min-width: ${breakpoints.md}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0 3px;

        & > *:nth-child(2) {
            grid-column: 2;
        }
    }
`

export const button = css`
    font-size: 8px;
    font-weight: 500;
`