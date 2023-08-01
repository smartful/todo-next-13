import React from 'react';
import { Metadata } from 'next';
import styles from './profileLayout.module.css';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'A todo app : user profile page',
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}
