import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <h1>Todo App</h1>
      <div className={styles.action}>
        <Link href="/tasks">{'>'} Tasks</Link>
      </div>
    </>
  );
}
