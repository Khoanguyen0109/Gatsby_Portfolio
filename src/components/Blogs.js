import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

export const Blogs = ({ blogs }) => {
  return (
    <div className="section projects">
      <Title title="Blog"></Title>

      <div className="section-center blogs-center">
        {blogs.map(blog => (
          <Blog key={blog.id} {...blog}></Blog>
        ))}
      </div>
    </div>
  )
}
export default Blogs
