import Image from "next/image"
import styles from "./logoComponent.module.css"
import Link from "next/link"
import Logo from "/public/logo-big.svg"
const LogoComponent = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
       <Image className={styles.hoverEffect} src={Logo} alt="logo iamtbay" width={150} height={150}/>
      </Link>
    </div>
  )
}
export default LogoComponent