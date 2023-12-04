/* eslint-disable @next/next/no-img-element */
// pages/blog_page/[id].js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useTheme } from "../components/hooks/ThemeContext";
import styles from "../styles/Home.module.css";

const BlogPage = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  //   const id =""

  const id = Cookies.get("clickedPostId");

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const response = await fetch(
          `https://nova-notions.vercel.app/blog/posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Blog post not found");
        }

        const result = await response.json();
        // console.log(result)
        setPost(result);
      } catch (error) {
        setError(error.message || "Error fetching post");
      }
    };

    if (id) {
      fetchPostById();
    }
  }, [id]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        post && (
          <div
            className={`${styles.blogpagemain} bg-${theme} text-${
              theme == "light" ? "dark" : "light"
            }`}
          >
            <div className={`${styles.blogpageimgcontainer}`}>
              <div className={`${styles.blogpageimg}`}>
                <div>
                  <img src={`${post.img}`} alt={post.title} />
                </div>
              </div>
              <div className={`${styles.blogpagedetails}`}>
                <h2>{post.title}</h2>
                <p>Time: {post.time}</p>
                <div>
                  <p>Introduction:</p>
                  <p>{post.desc}</p>
                </div>
                <div>
                  <p>Easy Understanding:</p>
                  <p>{post.KeyElements}</p>
                </div>
                {Object.keys(post.Strategies).map((category) => (
                <div key={category} className={styles.blogpostlist}>
                  
                  <ul>
                  <h3>{category}:</h3>
                    {Object.keys(post.Strategies[category]).map((strategy) => (
                      <>
                      <h4>{strategy}:</h4>
                      <li key={strategy}>
                        {post.Strategies[category][strategy]}
                      </li>
                      <br />
                      </>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                  <p>Conclusion:</p>
                  <p>{post.Conclusion}</p>
                </div>
              <div>
                  <p>Summary:</p>
                  <p>{post.summary}</p>
                </div>
              </div>
              
              

            </div>
          </div>
        )
      )}
    </div>
  );
};

export default BlogPage;
