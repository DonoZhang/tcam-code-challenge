import { css } from '@emotion/css'
import { breakpoints, colors } from 'tcam-theme'

export const background = css`
    background: ${colors.secondary};
    height: 100%;
`

export const dashboardContainer = css`
    display: grid;
    padding: 10px;
    grid-template-columns: 0 auto 0;

    @media (min-width: ${breakpoints.md}) {
        grid-template-columns: auto 600px auto;
    }

    & > * {
        grid-column: 2;
    }
`