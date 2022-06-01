import { css } from '@emotion/css'
import { breakpoints, colors } from 'tcam-theme'

export const portal = css`
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    background: ${colors.tertiary};
    border: 2px solid ${colors.secondary};
    border-radius: 3px;

    & > div {
        padding: 20px;
    }
`

export const inputContainer = css`
    display: grid;
    grid-template-columns: 50px auto;

    @media (min-width: ${breakpoints.lg}) {
        grid-template-columns: 100px auto;
    }
`

export const button = css`
    font-size: 8px;
    font-weight: 500;
    width: 100%;
    margin-top: 20px;
`