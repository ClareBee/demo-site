import React from "react"
import styles from "./movie-list.module.css"
import Img from "gatsby-image"

const MovieList = ({ data }) => {
  console.log("list", data.allSanityMovie)
  return (
    <article>
      <ul className={styles.list}>
        {data.allSanityMovie.edges.map(edge => (
          <li key={edge.node.title} className={styles.item}>
            <h2 className={styles.heading}>{edge.node.title}</h2>
            <p>{new Date(edge.node.releaseDate).getFullYear()}</p>
            <Img
              fluid={edge.node.poster.asset.fluid}
              alt={edge.node.title}
              className={styles.image}
              // backgroundColor="true"
            />
          </li>
        ))}
      </ul>
    </article>
  )
}

export default MovieList
