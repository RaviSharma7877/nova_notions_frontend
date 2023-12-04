/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import img from '../images/userimg1.jpg'
import { useTheme } from "../components/hooks/ThemeContext";

function about() {
  const { theme } = useTheme();
  return (
    <div className={`${styles.aboutcontainer} bg-${theme}`}>
      <div className={`${styles.aboutimg} `}>
        <Image src={img} className={`border border-${theme=='light'? 'dark':'light'}`}></Image>
      </div>
      <div className={`${styles.aboutusdata} text-${theme=='light'? 'dark':'light'}`}>
        <h1>I`m Ravi</h1>
        <p>A budding web developer with strong foundation in HTML, CSS, JavaScript, and Java. I am eager 
to kickstart my career in web development and committed to continuous learning and growth. 
Although I am a fresher, I am excited to apply my knowledge and contribute to innovative 
projects</p>
      </div>
    </div>
  )
}

export default about