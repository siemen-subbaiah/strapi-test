import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ index, project }) => {
  return (
    <article className="project">
      <Image
        fluid={project.image.childImageSharp.fluid}
        className="project-img"
      />

      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{project.title || "default title"}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-stack">
          {project.stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={project.github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={project.url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
