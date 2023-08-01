'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const sections = [
  {
    id: 1,
    name: 'Tasks',
    href: '/tasks',
  },
  {
    id: 2,
    name: 'Profile',
    href: '/profile',
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.header}>
      <h1>
        <Link href="/">Todo</Link>
      </h1>
      <ul>
        {sections.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.id}>
              <Link href={link.href} className={isActive ? styles.textActive : ''}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
