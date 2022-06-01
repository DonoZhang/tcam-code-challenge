import React from 'react'
import { cx } from '@emotion/css'
import * as styles from './styles'

interface MoneyProps {
  symbol: string
  abbreviation: string
  value: number
  className: string
}

export const Money:React.FunctionComponent<MoneyProps> = (
    {
      symbol,
      abbreviation,
      value,
      className
    }
  ) => (
      <div className={cx(styles.money, className)}>
        {abbreviation}{symbol}{value.toFixed(2)}
      </div>
    )
