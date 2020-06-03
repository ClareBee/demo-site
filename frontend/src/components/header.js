import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import Nav from "./nav"

const Header = ({ siteTitle, description }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <p>{description}</p>
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
