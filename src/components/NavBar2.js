import styles from "../styles/Home.module.css";
import Link from 'next/link';
import { useTheme } from '../components/hooks/ThemeContext';


export default function NavBar2() {
  const { theme } = useTheme();


  const textColor = theme === 'light' ? 'text-dark' : 'text-light';
  const bgColor = theme === 'light' ? 'bg-light' : 'bg-dark';

  return (
    <nav className={`navbar navbar-expand-md justify-content-center ${bgColor} border-0`}>
      <ul className={`${styles.navbar_nav}`}>
        <li className="nav-item mx-2">
          <Link className={`nav-link ${textColor} border-0 px-3`} href="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`nav-link ${textColor} border-0 px-3`} href="/blog">Blog</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`nav-link ${textColor} border-0 px-3`} href="/about">About</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`nav-link ${textColor} border-0 px-3`} href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
