import { css, keyframes } from '@emotion/css'
import { breakpoints, colors } from 'tcam-theme'

const animation = keyframes`
    0%,25% {
        background-size: 8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
        background-position: 0 50%,0 calc(50% - 2px),0 calc(50% + 2px),50% 50%,50% calc(50% - 2px),50% calc(50% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
    }
    50% {
        background-size: 8px 100%,8px 4px,8px 4px,8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
        background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(50% - 2px),50% calc(50% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
    }
    75% {
        background-size: 8px 100%,8px 4px,8px 4px,8px 100%,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
        background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(0% - 2px),50% calc(100% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
    }
    95%,100% {
        background-size: 8px 100%,8px 4px, 8px 4px,8px 100%,8px 4px,8px 4px,8px 100%,8px 4px,8px 4px;
        background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(0% - 2px),50% calc(100% + 2px),100% 50%,100% calc(0% - 2px),100% calc(100% + 2px);
    }
`

export const loader = css`
    width: 40px;
    height: 40px;
    --c: linear-gradient(${colors.primary} 0 0);
    --r1: radial-gradient(farthest-side at bottom,${colors.primary} 93%,${colors.primary});
    --r2: radial-gradient(farthest-side at top   ,${colors.primary} 93%,${colors.primary});
    background: 
    var(--c) ,
    var(--r1),
    var(--r2),
    var(--c) ,  
    var(--r1),
    var(--r2),
    var(--c) ,
    var(--r1),
    var(--r2);
    background-repeat: no-repeat;
    animation: ${animation} 1s infinite alternate;
`
