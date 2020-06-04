import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "./movie.module.css"

export const query = graphql`
  query movie($slug: String!) {
    sanityMovie(slug: { current: { eq: $slug } }) {
      title
      _rawOverview
      releaseDate
      poster {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      castMembers {
        characterName
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
      crewMembers {
        job
        person {
          _id
          name
        }
      }
    }
  }
`

const Movie = data => {
  const {
    title,
    _rawOverview: description,
    releaseDate,
    castMembers,
    poster,
    crewMembers,
  } = data.data.sanityMovie
  return (
    <Layout>
      <h1>{title}</h1>
      <hr />
      <h3>{new Date(releaseDate).getFullYear()}</h3>
      <div className={styles.moviecontainer}>
        <div className={styles.description}>
          <h2>Summary</h2>
          <p>{description[0].children[0].text}</p>
          <ul className={styles.crew}>
            {crewMembers.map(member => (
              <li key={member.person._id}>
                <span>{member.job}</span>

                <span>{member.person.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.poster}>
          <Img fluid={poster.asset.fluid} />
        </div>
      </div>
      <article className={styles.castSection}>
        <h2>Cast</h2>
        <hr />
        <ul className={styles.cast}>
          {castMembers.map(member => (
            <li key={member.person._id + title} className={styles.castRow}>
              {member.person.image ? (
                <div className={styles.actor}>
                  <div className={styles.actorImage}>
                    <Img
                      fluid={member.person.image.asset.fluid}
                      alt={member.person.name}
                      title={member.person.name}
                    />
                  </div>
                  <p className={styles.actorName}>{member.person.name}</p>
                </div>
              ) : null}
              <p>{member.characterName}</p>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  )
}

export default Movie
