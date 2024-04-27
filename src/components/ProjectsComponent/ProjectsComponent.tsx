"use client"
import styles from "./projects.module.css"
import ProjectCard from "../Card/ProjectCard"
import { useState,useEffect } from "react"

export type Project = {
  id: number
  projectName: string
  link: string
  description:string
}


const Projects = () => {

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      projectName: "",
      link: "",
      description:"",
    }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       // const response = await fetch('/projects.json'); // Path to your JSON file
        const response = await fetch('/https://iamtbay.github.io/dev/projects.json.json'); // Path to your JSON file
        const jsonData = await response.json();
        setProjects(jsonData.projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


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