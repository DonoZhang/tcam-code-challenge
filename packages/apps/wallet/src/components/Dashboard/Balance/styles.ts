import { css } from '@emotion/css'
import { breakpoints } from 'tcam-theme'

export const balance = css`
    font-size: 20px;

    @media (min-width: ${breakpoints.md}) {
        font-size: 25px;
    }
    
    @media (min-width: ${breakpoints.lg}) {
        font-size: 30px;
    }

`