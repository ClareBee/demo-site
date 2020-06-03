import React from "react"
import styles from "./movie-list.module.css"
import Img from "gatsby-image"

const MovieList = ({ data }) => {
  console.log("list", data.allSanityMovie)
  return (
    <article>
      <ul className={styles.list}>
        {data.allSanityMovie.edges.map(({ node }) => (
          <li key={node.title} className={styles.item}>
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
            </div>
            <p className={styles.description}>
              {node._rawOverview[0].children[0].text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default MovieList
