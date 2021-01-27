import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = props => {
  const {
    id,
    title,
    created_at,
    desc,
    published_at,
    strapiId,
    slug,
    updated_at,
    category,
    image,
  } = props

  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img"></Image>
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{created_at}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
