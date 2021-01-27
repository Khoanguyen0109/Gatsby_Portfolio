import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} />
      <Blogs blogs={blogs} />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid

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
    allStrapiBlogs(sort: { fields: id, order: DESC }, limit: 3) {
      nodes {
        category
        created_at(formatString: "DD/MM/YYYY")
        desc
        id
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        published_at(fromNow: false, formatString: "DD/MM/YYYY")
        slug
        strapiId
        title
        updated_at(formatString: "DD/MM/YYYY")
      }
    }
  }
`
