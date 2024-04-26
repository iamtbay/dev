import Image from "next/image"
import styles from "./logoComponent.module.css"

const LogoComponent = () => {
  return (
      <div className={styles.container}>
          <Image src="/logo-big.svg" alt="logo iamtbay" width={100} height={100}/>
    </div>
  )
}
export default LogoComponent