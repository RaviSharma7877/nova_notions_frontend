import React from 'react'
import styles from "../styles/Home.module.css"
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '../icon';
import { useState } from 'react';
import llogo1 from '../images/logo.png';
import dlogo2 from '../images/blacklogo.png';
import Image from 'next/image';
import { useTheme } from './hooks/ThemeContext';





function Navbar() {
  const { theme, toggleTheme } = useTheme();

  // Determine the logo based on the theme
  const logo = theme === 'light' ? llogo1 : dlogo2;

  // Use state to manage the search container's active state
  const [isSearchActive, setSearchActive] = useState(false);


  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
    document.body.classList.toggle('active', isSearchActive);
  };
  
  return (
    <nav className={`bg-${theme} ${styles.nav}`}>
      <div className={`${styles.socialnav}`}>
        <div>
        <motion.a href='#' target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3'
        >
          <i className={`bx bxl-twitter large-icon text-${theme === 'light' ? 'dark' : 'light'}`}></i>
        </motion.a>
        <motion.a href='#' target={"_blank"}
          className='w-6 mx-2'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`bx bxl-github large-icon text-${theme === 'light' ? 'dark' : 'light'}`}></i>
        </motion.a>
        <motion.a href='#' target={"_blank"}
          className='w-6 mx-2'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`bx bxl-linkedin-square large-icon text-${theme === 'light' ? 'dark' : 'light'}`}></i>
        </motion.a>
        <motion.a href='#' target={"_blank"}
          className='w-6 mx-2'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`bx bxl-instagram-alt large-icon text-${theme === 'light' ? 'dark' : 'light'}`}></i>
        </motion.a>
        </div>
        <button
          onClick={toggleTheme}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'
          }`}
        >
          {theme === 'dark' ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </div>
      <div className={`${styles.logo}`}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={`${styles.third}`}>
        {/* <div className={`${styles.header_btn_group}`}>
          <button
            className={`${styles.search_btn}`}
            aria-label="Search"
            onClick={toggleSearch}
          >
            <i className={`bx bx-search-alt-2 text-${theme === 'light' ? 'dark' : 'light'}`}></i>
          </button>
        </div> */}

        {/* <div className={`${styles.search_container1} ${isSearchActive ? 'active' : ''}`}>
          <div className={`${styles.search_box}`}>
            <input
              type="search"
              name="search"
              aria-label="Search here"
              placeholder="Type keywords here..."
              className={`${styles.search_input}`}
            />
            <button className={`${styles.search_submit}`} aria-label="Submit search">
              <i className='bx bx-search-alt-2'></i>
            </button>
          </div>
          <button
            className={`${styles.search_close_btn}`}
            aria-label="Cancel search"
            onClick={toggleSearch}
          ></button>
        </div> */}

        
      </div>
    </nav>
  )
}

export default Navbar