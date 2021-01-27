import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <section className=" blog-page">
        <Blogs blogs={blogs} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: id, order: DESC }) {
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

export default Blog
