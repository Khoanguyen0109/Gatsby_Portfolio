import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog
  console.log("content :>> ", content)
  return (
    <Layout>
      <SEO title={title} description={desc}></SEO>
      <section className="blog-template">
        <div className="section-center">
          <article>
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
