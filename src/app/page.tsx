"use client"
import styles from './page.module.css'
import LogoComponent from '@/components/LogoComponent/logoComponent'
import InfoComponent from '@/components/InfoComponent/InfoComponent'
import { useTheme } from './context/theme'
import { IoSunnyOutline,IoMoonOutline } from "react-icons/io5";

type Props = {
  children: JSX.Element
}
export default function Home({ children }: Props) {
  const {toggleTheme,theme} =  useTheme()
  
  function changeTheme() {
    toggleTheme()
  }
  
  
  return (
    <main className={`${styles.main} ${theme === "light" && styles.lightMode}`}>
      <div className={styles.navbar}>
        {
          theme === "light"
            ?
            <IoMoonOutline  className={styles.modeIcon} onClick={changeTheme}/> 
            :
          <IoSunnyOutline className={styles.modeIcon} onClick={changeTheme} /> 
        }
     
      </div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <LogoComponent />
        </div>
        <div className={styles.children}>
          {children || <InfoComponent />}
        </div>
      
      </div>
    </main>
  )
}
