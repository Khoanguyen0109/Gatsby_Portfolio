import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects }) => {
  return (
    <div className="section projects">
      <Title title="Projects"></Title>

      <div className="section-center projects-center">
        {projects.map(project => {
          return <Project key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
