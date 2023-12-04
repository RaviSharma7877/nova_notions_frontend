import React from "react";
import { useTheme } from "../../components/hooks/ThemeContext";
import img1 from "@/images/cardimg1.jpeg";
import img2 from "@/images/cardimg2.jpeg";
import img3 from "@/images/cardimg3.jpeg";
import img4 from "@/images/cardimg4.jpeg";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css"

export default function Homecomponent({ theme }) {
  // const { theme } = useTheme();
  const cardClass = theme === "light" ? "bg-light" : "bg-dark";
  const cardTextClass = theme === "light" ? "dark" : "light";
  const data = [
    {
      id: 1,
      imgSrc: img1,
      heading: "Card 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec fringilla dui, ut lacinia justo. Vivamus venenatis odio ac sapien.",
    },
    {
      id: 2,
      imgSrc: img2,
      heading: "Card 2",
      description:
        "Pellentesque euismod aliquam sem, id malesuada ipsum luctus vel. Nulla facilisi. Nullam pellentesque non lectus a tempor.",
    },
    {
      id: 3,
      imgSrc: img3,
      heading: "Card 3",
      description:
        "Suspendisse potenti. Fusce interdum viverra velit. Phasellus congue nulla non lacus tristique, nec laoreet ex laoreet.",
    },
    {
      id: 4,
      imgSrc: img4,
      heading: "Card 4",
      description:
        "Vivamus id feugiat metus, eu vestibulum libero. Sed tincidunt quam eu elit rhoncus. Curabitur at sem eget neque posuere.",
    }
  ];
  console.log(theme);
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
        {data.map((card) => (
          <div key={card.id} className={`${theme=='light'?styles.bd:styles.bl} ${styles.maincard}`}>
            <div className={`${styles.card} ${cardClass} border-${cardTextClass}`}>
              <Link href="/">
              <Image
                src={card.imgSrc}
                className={`card-img-top my-3`}
                alt={card.heading}
              />
              </Link>
              <div className={`${styles.desc}`}>
                <Link href="/">
                <h5 className={`text-${cardTextClass} py-3 ${styles.heading1}`}>
                  {card.heading}
                </h5>
                </Link>
                <p className={`text-${cardTextClass} `}>
                  {card.description.length > 100
                    ? `${card.description.slice(0, 100)}...`
                    : card.description}
                </p>
              </div>
              <div className={`${styles.readmore} `}>
                    <Link href="/" className={`${theme=='light'?'text-dark':'text-light'}`}>
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
