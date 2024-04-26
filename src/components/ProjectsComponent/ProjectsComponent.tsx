"use client"
import styles from "./projects.module.css"
import ProjectCard from "../Card/ProjectCard"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { useState } from "react"
import  projectsJson from "/public/projects.json"

export type Project = {
  id: number
  projectName: string
  link: string
  description:string
}


const Projects = () => {

  const projects:Project[] = projectsJson.projects


  return (
    <div className={styles.mainDiv}>
      
      <div id="scrollableContainer" className={`${styles.container} ${styles.slider}`} >
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
          )
        )}

      </div>
      
    </div>
  )
}
export default Projects