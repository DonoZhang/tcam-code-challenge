import { css } from '@emotion/css'
import { colors } from 'tcam-theme'

export const header = css`
    width: 100%;
    display: grid;
    position: relative;
    background: ${colors.primary};
`

export const title = css`
    padding: 10px 0;
    color: ${colors.textPrimary};
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin: 0;
    font-size: 25px;
`

export const imageContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    height: 100%;

    img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        object-fit: cover;
    }
`