import Link from "next/link"
import styles from "./projectcard.module.css"
import { FaGithub } from "react-icons/fa"
import { Project } from "../ProjectsComponent/ProjectsComponent"
import { useTheme } from "@/app/context/theme"
const ProjectCard = (props: Project) => {
  const { projectName, link, description } = props
  
  const {theme} = useTheme()
  
  return (
    <div className={`${styles.container} ${theme==="light" ? styles.dark : styles.light}`}>
      <div className={styles.cardImg}>
        <Link href={link} target="_blank">
        <div className={styles.codeLink}>
          <FaGithub />
        </div>
        </Link>
        <div className={styles.titleContainer}>
          <h3>{projectName.substring(0,1)}</h3>
        </div>
      </div>
      
      <div className={styles.cardBody}>
          <h4 className={styles.infoTitle}>{projectName}</h4>
          <p className={styles.infoText}>{description}</p>
      </div>
    </div>
  )
}
export default ProjectCard