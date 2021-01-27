import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <section className="project-page">
        <Projects projects={projects} />
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        id
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        url
        strapiId
        project_name
        github
        stack {
          Title
          id
        }
      }
    }
  }
`
