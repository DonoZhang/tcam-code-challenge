import { css } from '@emotion/css'
import { breakpoints, colors } from 'tcam-theme'

export const inputWrapper = css`
    label {
        color: ${colors.textTertiary};
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        line-height: 20px;

        @media (midth: ${breakpoints.md}) {
            font-size: 18px;
            line-height: 24px;
        }
        
        @media (min-width: ${breakpoints.lg}) {
            font-size: 20px;
            line-height: 30px;
        }
    }

    input {
        border: 1px solid ${colors.secondary};
        border-radius: 5px;
        font-size: 12px;
        line-height: 20px;

        @media (midth: ${breakpoints.md}) {
            font-size: 18px;
            line-height: 24px;
        }
        
        @media (min-width: ${breakpoints.lg}) {
            font-size: 20px;
            line-height: 30px;
        }

        &:focus {
            outline: none;
        }

        &:read-only {
            color: ${colors.info};
        }   
    }
`
