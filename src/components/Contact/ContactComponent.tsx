import Link from "next/link"
import styles from "./contact.module.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { useTheme } from "@/app/context/theme"
const ContactComponent = () => {
    const { theme } = useTheme()
    return (
    <div className={`${styles.container} ${theme=="light" && styles.light}`}>
                  <Link href="https://github.com/iamtbay" target="blank">
                    <div className={styles.circle}>
                        <FaGithub className={styles.icon} />
                    </div>
                  </Link>

                  <Link href="https://linkedin.com/in/iamtbay" target="blank">
                     <div className={styles.circle}>    
                        <FaLinkedinIn className={styles.icon} />
                    </div>
                  </Link>
              </div>
  )
}
export default ContactComponent