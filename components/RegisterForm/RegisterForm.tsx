'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './registerForm.module.css';

const RegisterForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      setError('All fields are mandatory');
      return;
    }

    try {
      const responseUserExists = await fetch('/api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await responseUserExists.json();

      if (user) {
        setError('User Already exists');
        return;
      }

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      });

      if (response.ok) {
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        router.push('/');
      } else {
        console.warn('User Registration failed');
      }
    } catch (error) {
      console.error('Error during registration : ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.registerForm}>
      <input type="text" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
      <input type="text" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} value={lastname} />

      <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      {error && <div className={styles.registerError}>{error}</div>}
    </form>
  );
};

export default RegisterForm;
