import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  {
    site {
      id
      siteMetadata {
        author
        description
        image
        siteUrl
        title
      }
    }
  }
`

const SEO = ({ title, description, image, article }) => {
  const { site } = useStaticQuery(query)

  return (
    <Helmet htmlAttributes={{ lang: " en" }} title={title}>
      <meta name="description" content={description}></meta>
    </Helmet>
  )
}

export default SEO
