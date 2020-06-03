import React from "react"
import styles from "./movie-list.module.css"
import MovieItem from "./movie-item"

const MovieList = ({ data }) => {
  const sortByTitle = movies => {
    console.log(movies)
    const sorted = movies.sort((a, b) =>
      a.node.title.localeCompare(b.node.title)
    )
    return sorted
  }
  return (
    <article>
      <ul className={styles.list}>
        {sortByTitle(data.allSanityMovie.edges).map(({ node }) => (
          <MovieItem node={node} key={node.title} />
        ))}
      </ul>
    </article>
  )
}

export default MovieList
