import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const MovieList = ({ data }) => {
  console.log("list", data.allSanityMovie)
  return (
    <article
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <ul className="movie-list">
        {data.allSanityMovie.edges.map(edge => (
          <li key={edge.key} className="movie-item">
            <h2>{edge.node.title}</h2>
            <img
              src={edge.node.poster.asset.fluid.srcWebp}
              alt={edge.node.title}
              width="200"
            />
          </li>
        ))}
      </ul>
    </article>
  )
}

export default MovieList
