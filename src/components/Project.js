import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = props => {
  console.log("props :>> ", props)
  const {
    description,
    project_name,
    id,
    image,
    strapiId,
    url,
    github,
    stack,
  } = props
  return (
    <article className="project">
      <Image
        fluid={image.childImageSharp.fluid}
        className="project-img"
      ></Image>
      <div className="project-info">
        <span className="project-number">{id}</span>
        <h3>{project_name}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-stack">
          {stack.map(item => (
            <span className="project-stack">{item.Title}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={github} target="_blank">
            {" "}
            <FaGithubSquare />
          </a>
          <a href={url} target="_blank">
            {" "}
            <FaShareSquare />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
