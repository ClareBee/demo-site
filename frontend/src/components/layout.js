/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="container">
      <Header
        siteTitle={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by{" "}
        <a href="https://clarebee.com">ClareBee</a> with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>,
        <a href="https://www.sanity.io/">Sanity.io</a>, and hosted on
        <a href="https://www.netlify.com">Netlify</a>,
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
