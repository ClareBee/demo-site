import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import MovieList from "../components/movie-list"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <MovieList data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allSanityMovie {
      edges {
        node {
          _id
          slug {
            current
          }
          title
          releaseDate
          _rawOverview
          poster {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
          castMembers {
            person {
              _id
              name
              image {
                asset {
                  fluid(maxWidth: 300) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
