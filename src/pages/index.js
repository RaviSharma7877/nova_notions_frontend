import Head from 'next/head'
import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react";
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
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://nova-notions.vercel.app/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        const recentPostsData = result.slice(0,1);
        const recentPostsData2 = result.slice(1,3);
        const recentPostsData3 = result.slice(3,8);
        console.log(recentPostsData3)
        setData(recentPostsData);
        setData2(recentPostsData2);
        setData3(recentPostsData3);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleClick = (id) => {
    Cookies.set("clickedPostId", id, { expires: 7 });
  };
  return <>
  <main className={`${styles.main} bg-${theme}`}>
    {data.map((item)=> (
      <div key={item._id["$oid"]}>
      <div className={`${styles.img}`}>
        <img src={item.img} alt="" />
      </div>
      <div className={`${styles.data}`}>
        <p>Health</p>
        <Link href="/blogpage" onClick={() => handleClick(item._id["$oid"])}><h1>{item.title}</h1></Link>
        <div className={`${styles.userdata}`}>
          <div>
            <p className={`${styles.time}`}>{item.time}</p>
          </div>
        </div>
      </div>
    </div>
    ))}
    <div className={styles.homebannerimage}>
    {data2.map((item)=> (
      <div  key={item._id["$oid"]}>
      <div>
      <div className={`${styles.img}`}>
        <img src={item.img} alt="" />
      </div>
      <div className={`${styles.data}`}>
        <p>Health</p>
        <Link href="/blogpage" onClick={() => handleClick(item._id["$oid"])}><h1>{item.title}</h1></Link>
        <div className={`${styles.userdata}`}>
          <div>
            <p className={`${styles.time}`}>{item.time}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    ))}
    </div>
  </main>
  <ThemeProvider>
    
  <Homecomponent theme = {theme}/>
  </ThemeProvider>
  
  
  </>
}
