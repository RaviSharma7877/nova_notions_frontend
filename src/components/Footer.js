import React from 'react';
import Link from 'next/link';
import { useTheme } from './hooks/ThemeContext';
import styles from "../styles/Home.module.css"

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className={`w-100 ${styles.footer} bg-${theme} border-top border-${theme=='light'?'dark':'light' } text-${theme=='light'?'dark':'light'}`}>
      <div className="w-100 d-flex justify-content-between align-items-center">
        <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
        <div className="d-flex align-items-center py-2 py-lg-0 px5">
          Built with <span className="text-primary dark:text-primaryDark h2 px-1">&#9825;</span>
          <Link href="#" className={`text-${theme=='light'?'dark':'light' }`}>Ravi Sharma</Link>
        </div>
        <Link href="#" target="_blank" className={`${styles.sayhello}`}>
          Say hello
        </Link>
      </div>
    </div>
  );
};

export default Footer;
