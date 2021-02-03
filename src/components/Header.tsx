import { Link } from '@reach/router'
import React from 'react'

import styles from './Header.module.css'

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <div className={styles.headerSubWrapper}>
        <div className={styles.headerView}>
          <img src="/react-bricks-logo.svg" className={styles.image} alt="React Bricks" />
          <div className={styles.groupLink}>
            <Link to="/" className={styles.coupleLink}>
              Home
            </Link>
            {/* <Link to="/about-us" className={styles.coupleLink}>
              About us
            </Link> */}
          </div>
        </div>
        <Link to="/admin" className={styles.singleLink}>
          Edit content
        </Link>
      </div>
    </div>
  </header>
)

export default Header
