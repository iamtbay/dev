import Link from "next/link"
import Home from "../page"
import styles from "./projects.module.css"
import Projects from "@/components/ProjectsComponent/ProjectsComponent"
import { FaArrowLeft } from "react-icons/fa"

const ProjectsPage = () => {
  return (
    <Home>
        <div className={`${styles.container} entryAnimate`}>
        <p className={styles.mainPageLink}><Link href="/" className={styles.LinkSet}>  <FaArrowLeft /> Mainpage </Link></p>
        <h1>Projects</h1>
        <Projects />
      </div>
    </Home>
  )
}
export default ProjectsPage