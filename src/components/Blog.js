import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.slug}`} className="blog" key={blog.id}>
      <article>
        <Image fluid={blog.image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{blog.title}</h4>
          <p>{blog.description}</p>
          <div className="blog-footer">
            <p>{blog.category}</p>
            <p>{blog.date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
