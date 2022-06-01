import React from 'react'
import { cx } from '@emotion/css'
import * as styles from './styles'

interface HeaderProps {
  title: string,
  imageSrc: string,
  className: string,
}

export const Header:React.FunctionComponent<HeaderProps> = (
    {
      title,
      imageSrc,
      className
    }
  ) => (
      <div className={cx(styles.header, className)}>
        <p className={styles.title}>{title}</p>
        <div className={styles.imageContainer} >
          <img src={imageSrc} alt="profile_image" ></img>
        </div>
      </div>
    )
