import LogoComponent from "@/components/LogoComponent/logoComponent"
import Link from "next/link"
import styles from "./projects/projects.module.css"
import { FaArrowLeft } from "react-icons/fa"
import Home from "./page"
const NotFound = () => {
  return (
    <Home>
      <div className={`${styles.container} entryAnimate`}>
        <p className={styles.mainPageLink}><Link className={styles.LinkSet} href="/">  <FaArrowLeft /> Mainpage</Link></p>
        <p className={styles.notFoundText}>Oh, Seems like I didn&apos;t  create this page yet.</p>
    </div>
    </Home>
  )
}
export default NotFound