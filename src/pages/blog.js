import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Cookies from "js-cookie";
import { useTheme } from "../components/hooks/ThemeContext";
import { useInView } from 'react-intersection-observer';

function Blog() {
  const { theme } = useTheme();
  const cardTextClass = theme === "light" ? "dark" : "light";
  const [data, setData] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Filtered data based on search
  const [searchTerm, setSearchTerm] = useState('');
  const [isRecentPostsVisible, setRecentPostsVisible] = useState(false);
  const [isPopularPostsVisible, setPopularPostsVisible] = useState(false);

  const [recentPostsRef, recentPostsInView] = useInView({ triggerOnce: true });
  const [popularPostsRef, popularPostsInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://nova-notions.vercel.app/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
        setFilteredData(result);
        const recentPostsData = result.slice(-6);
        setRecentPosts(recentPostsData);
        const popularPostsData = result.slice(-1);
        setPopularPosts(popularPostsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (recentPostsInView) {
      setRecentPostsVisible(true);
    }
    if (popularPostsInView) {
      setPopularPostsVisible(true);
    }
  }, [recentPostsInView, popularPostsInView]);

  useEffect(() => {
    if (isRecentPostsVisible && data.length > 0) {
      const recentPostsData = data.slice(-6);
      setRecentPosts(recentPostsData);
    }

    if (isPopularPostsVisible && data.length > 0) {
      const popularPostsData = data.slice(-1);
      setPopularPosts(popularPostsData);
    }
  }, [isRecentPostsVisible, isPopularPostsVisible, data]);

  const handleClick = (id) => {
    Cookies.set("clickedPostId", id, { expires: 7 });
  };

  const handleSearch = () => {
    const filtered = data.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <main className={`${styles.mainblog} bg-${theme}`}>
        <div className="data">
          <div className={`${styles.heading} bg-${theme}`}>
            <div>
              <span className={`${styles.span}`}>&#9825;</span>
            </div>
            <h1 className={`text-${theme === "light" ? "dark" : "light"} fs-1`}>
              Our Stories
            </h1>
          </div>
          <div className={`${styles.row2} bg-${theme}`} ref={recentPostsRef}>
            {[...filteredData].reverse().map((card) => (
              <div
                key={card._id["$oid"]}
                className={`${theme === "light" ? styles.bd : styles.bl} ${styles.maincard}`}
              >
                <div className={`${styles.card} border-${theme === "light" ? "dark" : "light"}`}>
                  <Link href="/blogpage">
                    <img
                      src={card.img}
                      className={`card-img-top my-3 ${styles.cardimg}`}
                      alt={card.heading}
                      onClick={() => handleClick(card._id["$oid"])}
                    />
                  </Link>
                  <div className={`${styles.desc}`}>
                    <Link href="/blogpage">
                      <h5
                        className={`text-${theme === "light" ? "dark" : "light"} py-3 ${styles.heading1}`}
                        onClick={() => handleClick(card._id["$oid"])}
                      >
                        {card.title.length > 30 ? `${card.title.slice(0, 30)}...` : card.title}
                      </h5>
                    </Link>
                    <p className={`text-${theme === "light" ? "dark" : "light"}`}>
                      {card.desc.length > 100 ? `${card.desc.slice(0, 100)}...` : card.desc}
                    </p>
                  </div>
                  <div className={`${styles.readmore}`}>
                    <Link
                      href="/blogpage"
                      className={`${theme === "light" ? "text-dark" : "text-light"}`}
                      onClick={() => handleClick(card._id["$oid"])}
                    >
                      <p>Read article</p>
                      <i className="bx bx-chevron-right-circle"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${styles.cat} text-shadow-lg bg-${theme} text-${
            theme === "light" ? "dark" : "light"
          }`}
        >
          <div>
            <div className={`${styles.searchinput}`}>
              <input
                type="text"
                placeholder="Enter your Keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={
                  theme == "light"
                    ? `${styles.borderdark}`
                    : `${styles.borderlight}`
                }
              />
              <button type="button" className={`bg-${theme}`} onClick={handleSearch}>
                <i
                  className={`bx bx-search text-${
                    theme == "light" ? "dark" : "light"
                  }`}
                ></i>
              </button>
            </div>
            <div ref={popularPostsRef}>
              {isPopularPostsVisible && (
                <div className={`${styles.popularpost}`}>
                  <div className={`${styles.tophead}`}>
                    <h2>Popular Post</h2>
                  </div>
                  <div className={`${styles.data1}`}>
                    <div className={`${styles.img1}`}>
                      <img src={popularPosts[0]?.img} alt="" />
                    </div>
                    <div>
                      <p className={`${styles.time}`}>{popularPosts[0]?.time}</p>
                      <Link href="/blogpage">
                        <h4>{popularPosts[0]?.title}</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={recentPostsRef}>
              {isRecentPostsVisible && (
                <div className={`${styles.recentpost} bg-${theme} text-${
                  theme === "light" ? "dark" : "light"
                }`}>
                  <div className={`${styles.recenthead}`}>
                    <h2>Recent Post</h2>
                  </div>
                  <div className={`${styles.datacontainer}`}>
                    {recentPosts.map((post) => (
                      <div key={post.id}>
                        <Link href='/blogpage'>
                          <img src={post.img} />
                        </Link>
                        <div className={`${styles.recentdata}`}>
                          <Link href='/blogpage'>
                            <h4
                              className={`text-${
                                theme === "light" ? "dark" : "light"
                              } fw-normal text-decoration-none`}
                            >
                              {post.title.length > 20
                              ? `${post.title.slice(0, 20)}...`
                              : post.title}
                            </h4>
                          </Link>
                          <p className={`text-${cardTextClass}`}>
                            {post.desc.length > 100
                              ? `${post.desc.slice(0, 20)}...`
                              : post.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={`${styles.category}`}></div>
        </div>
      </main>
    </>
  );
}

export default Blog;
