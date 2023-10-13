'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const enter = async () => {
    let options = {
      redirect: false,
      email: email,
      password: password,
    };
    setIsLoading(true);
    const res = await signIn('credentials', options);
    setIsLoading(false);
    if (res?.error) {
      setError(true);
    } else {
      setEmail('');
      setPassword('');
      router.replace('/admin');
    }
  };

  return (
    <div className={styles.login}>
      <h2 className={styles.formHeader}>Увійти</h2>
      <div className={`${styles.formData} ${error ? styles.error : ''}`}>
        <label>Логін</label>
        <input type='text' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={`${styles.formData} ${error ? styles.error : ''}`}>
        <label>Пароль</label>
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className={styles.button} onClick={enter}>
        Увійти
      </button>
    </div>
  );
};

export default Login;
