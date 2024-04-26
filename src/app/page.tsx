import Image from 'next/image'
import styles from './page.module.css'
import Mainpage from '@/components/MainPage/Mainpage'

export default function Home() {
  return (
    <main className={styles.main}>
      <Mainpage />
    </main>
  )
}
