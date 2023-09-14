'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import styles from './loginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res && res.error) {
        setError('Invalid Credentials');
        return;
      }

      router.replace('dashboard');
    } catch (error) {
      console.log('Login submit error : ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <div className={styles.loginError}>{error}</div>}
    </form>
  );
};

export default LoginForm;
