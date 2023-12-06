import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../components/hooks/ThemeContext";
import img1 from "@/images/cardimg1.jpeg";
import img2 from "@/images/cardimg2.jpeg";
import img3 from "@/images/cardimg3.jpeg";
import img4 from "@/images/cardimg4.jpeg";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";
import styles from "../../styles/Home.module.css"

export default function Homecomponent({ theme }) {
  // const { theme } = useTheme();
  const cardClass = theme === "light" ? "bg-light" : "bg-dark";
  const cardTextClass = theme === "light" ? "dark" : "light";
  const [data3, setData3] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://nova-notions.vercel.app/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        const recentPostsData3 = result.slice(3,7);
        console.log(recentPostsData3)
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
  return (
    <>
      <div>
        <Link
          href="/blog"
          className={`${styles.viewall} text-shadow-lg bg-${theme} text-${
            theme === "light" ? "dark" : "light"
          }`}
        >
          View all
        </Link>
      </div>
      <div className={`${styles.row1} bg-${theme} pt-4`}>
        {data3.map((card) => (
          <div key={card.id} className={`${theme=='light'?styles.bd:styles.bl} ${styles.maincard}`}>
            <div className={`${styles.card} ${cardClass} border-${cardTextClass}`}>
              <Link href="/blogpage">
              <img
                src={card.img}
                className={`card-img-top my-3 ${styles.homepageimage}`}
                alt={card.title}
                onClick={() => handleClick(card._id["$oid"])}
              />
              </Link>
              <div className={`${styles.desc}`}>
                <Link href="/blogpage" onClick={() => handleClick(card._id["$oid"])}>
                <h5 className={`text-${cardTextClass} py-3 ${styles.heading1}`}>
                  {card.title}
                </h5>
                </Link>
                <p className={`text-${cardTextClass} `}>
                  {card.desc.length > 100
                    ? `${card.desc.slice(0, 100)}...`
                    : card.desc}
                </p>
              </div>
              <div className={`${styles.readmore} `}>
                    <Link href="/blogpage" onClick={() => handleClick(card._id["$oid"])} className={`${theme=='light'?'text-dark':'text-light'}`}>
                    <p>Read article</p>
                    <i class='bx bx-chevron-right-circle'></i>
                    </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
