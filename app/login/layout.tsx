import React from 'react';
import { Metadata } from 'next';
import styles from './loginLayout.module.css';

export const metadata: Metadata = {
  title: 'Login',
  description: 'A todo app : user login page',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}
