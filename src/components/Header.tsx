import { Link } from '@reach/router'
import React from 'react'

import styles from './Header.module.css'

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.logoMenuWrapper}>
          <img src="/react-bricks-logo.svg" className={styles.logo} alt="React Bricks" />
          <div className={styles.headerMenu}>
            <Link to="/" className={styles.menuLink}>
              Home
            </Link>
            {/* <Link to="/about-us" className={styles.menuLink}>
              About us
            </Link> */}
          </div>
        </div>
        <Link to="/admin" className={styles.callToAction}>
          Edit content
        </Link>
      </div>
    </div>
  </header>
)

export default Header
