/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityMovie(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            title
            slug {
              current
            }
            releaseDate
            _rawOverview
            poster {
              asset {
                fluid {
                  srcSet
                  srcSetWebp
                }
              }
            }
            castMembers {
              person {
                name
                image {
                  asset {
                    fluid {
                      srcSet
                      srcSetWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const movies = result.data.allSanityMovie.edges || []
  movies.forEach((edge, index) => {
    const path = `/movies/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/movie.js"),
      context: { slug: edge.node.slug.current, ...edge.node },
    })
  })
}
