import React from "react"
import Img from "gatsby-image"

import styles from "./movie-list.module.css"

const summarise = content => {
  return content.slice(0, 180) + "..."
}

const MovieItem = ({ node }) => (
  <li key={node.title} className={styles.item}>
    <div className={styles.heading}>
      <div className={styles.titlebar}>
        <h2 className={styles.h2}>{node.title}</h2>
      </div>
      <p className={styles.year}>{new Date(node.releaseDate).getFullYear()}</p>
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
          {node.castMembers.slice(0, 4).map(person => (
            <>
              {person.person.image ? (
                <Img
                  fluid={person.person.image.asset.fluid}
                  className={styles.cast}
                  alt={person.person.name}
                />
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  </li>
)

export default MovieItem
