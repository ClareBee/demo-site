import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styles from "./movie-list.module.css"

const summarise = content => {
  return content.slice(0, 180) + "..."
}

const MovieItem = ({ node }) => (
  <li className={styles.item}>
    <Link to={`/movies/${node.slug.current}`}>
      <div className={styles.heading}>
        <div className={styles.titlebar}>
          <h2 className={styles.h2}>{node.title}</h2>
        </div>
        <p className={styles.year}>
          {new Date(node.releaseDate).getFullYear()}
        </p>
      </div>
      <div className={styles.container}>
        <Img
          fluid={node.poster.asset.fluid}
          alt={node.title}
          className={styles.image}
        />
        <div className={styles.description}>
          <p className={styles.text}>
            {summarise(node._rawOverview[0].children[0].text)}
          </p>
          <div className={styles.castMembers}>
            {node.castMembers.slice(0, 4).map(member => (
              <div key={member.person._id + node.title}>
                {member.person.image ? (
                  <Img
                    fluid={member.person.image.asset.fluid}
                    className={styles.cast}
                    alt={member.person.name}
                    title={member.person.name}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  </li>
)

export default MovieItem
