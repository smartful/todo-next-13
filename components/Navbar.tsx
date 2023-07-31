import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.header}>
      <h1>
        <Link href="/">Todo</Link>
      </h1>
      <ul>
        <li>
          <Link href="/tasks">Tasks</Link>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
