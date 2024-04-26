import styles from "./infoComponent.module.css"
import Link from "next/link"
import {FaLinkedinIn,FaGithub} from "react-icons/fa"
import ContactComponent from "../Contact/ContactComponent"


const InfoComponent = () => {
 
  return (
      <div className={`${styles.container} entryAnimate`}>
          <section className={styles.titles}>
              <h3 className={styles.subTitle}>Full-Stack Developer</h3>
              <h1 className={styles.nameTitle}>Talha Bay</h1>
          </section>
            <section className={styles.line}></section>
          <section className={styles.aboutText}>
        <p>{"Hello, I'm Talha. I'm a backend-focused full-stack developer with a keen interest in learning new technologies and crafting digital products. My primary focus is on web services."}</p>
        <p>You can check my Projects <Link href={"/projects"} style={{textDecoration:"underline"}}>here</Link></p>
        </section>

          <section className={styles.contact}>
          <p>Also you can contact with me on links below</p>
        <ContactComponent />
              <div className={styles.emailDiv}>
                  <Link href="mailto:iamtbay.gmail.com" style={{textDecoration:"underline"}}>iamtbay@gmail.com</Link>
              </div>
          </section>
    </div>
  )
}
export default InfoComponent