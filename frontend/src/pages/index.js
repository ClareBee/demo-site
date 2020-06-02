import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import MovieList from "../components/movie-list"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <MovieList data={data} />
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export const query = graphql`
  query {
    allSanityMovie {
      edges {
        node {
          title
          poster {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
