import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Movie = data => {
  console.log(data)
  const {
    title,
    _rawOverview: description,
    releaseDate,
    castMembers,
    poster,
  } = data.pageContext
  return (
    <Layout>
      <p>
        wip individual movie page - trying to get the gatsby-image working here!
      </p>
      <p>{title}</p>
      <p>{releaseDate}</p>
      <p>{description[0].children[0].text}</p>
      {/* <Img fluid={poster.asset.fluid} /> */}
    </Layout>
  )
}

export default Movie
