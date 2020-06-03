import React from "react"
import styles from "./movie-list.module.css"
import MovieItem from "./movie-item"

const MovieList = ({ data }) => {
  return (
    <article>
      <ul className={styles.list}>
        {data.allSanityMovie.edges.map(({ node }) => (
          <MovieItem node={node} />
        ))}
      </ul>
    </article>
  )
}

export default MovieList
