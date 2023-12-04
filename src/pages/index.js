import Head from 'next/head'
import styles from "../styles/Home.module.css"
import Link from 'next/link'
import Image from 'next/image'
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import userimg1 from '../images/userimg1.jpg';
import { ThemeProvider } from '@/components/hooks/ThemeContext'
import { useTheme } from '../components/hooks/ThemeContext';
import Homecomponent from '../components/subcomponent/Homecomponent'
import Footer from '@/components/Footer'


export default function Home() {
  const { theme } = useTheme(); 
  return <>
  <main className={`${styles.main} bg-${theme}`}>
    <div>
      <div className={`${styles.img}`}>
        <Image src={img1} alt="" />
      </div>
      <div className={`${styles.data}`}>
        <p>Health</p>
        <Link href="/"><h1>What is Health</h1></Link>
        <div className={`${styles.userdata}`}>
          <Image src={userimg1} alt="" className="user" />
          <div>
            <p className={`${styles.name}`}>Ravi</p>
            <p>|</p>
            <p className={`${styles.time}`}>December 01, 2023</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
      <div className={`${styles.img}`}>
        <Image src={img2} alt="" />
      </div>
      <div className={`${styles.data}`}>
        <p>Health</p>
        <Link href="/"><h1>What is Health</h1></Link>
        <div className={`${styles.userdata}`}>
          <Image src={userimg1} alt="" className="user" />
          <div>
            <p className={`${styles.name}`}>Ravi</p>
            <p>|</p>
            <p className={`${styles.time}`}>December 01, 2023</p>
          </div>
        </div>
        </div>
      </div>
      <div>
      <div className={`${styles.img}`}>
        <Image src={img3} alt="" />
      </div>
      <div className={`${styles.data}`}>
        <p>Health</p>
        <Link href="/"><h1>What is Health</h1></Link>
        <div className={`${styles.userdata}`}>
          <Image src={userimg1} alt="" className="user" />
          <div>
            <p className={`${styles.name}`}>Ravi</p>
            <p>|</p>
            <p className={`${styles.time}`}>December 01, 2023</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </main>
  <ThemeProvider>
    
  <Homecomponent theme = {theme}/>
  </ThemeProvider>
  
  
  </>
}
