import { usePathname } from "next/navigation"
import InfoComponent from "../InfoComponent/InfoComponent"
import LogoComponent from "../LogoComponent/logoComponent"
import styles from "./mainpage.module.css"
import Projects from "../Projects/Projects"

const Mainpage = () => {

  return (
      <div className={styles.container}>
        <LogoComponent />
        <InfoComponent />
    </div>
  )
}
export default Mainpage