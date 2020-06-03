import { Link } from "gatsby"
import React from "react"
import styles from "./nav.module.css"

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link to="/" activeClassName={styles.active}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName={styles.active}>
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
