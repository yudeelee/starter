'use client';

import Link from 'next/link';
import styles from './styles.module.scss';
import { signOut, signIn, useSession } from 'next-auth/react';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/admin/header'>Шапка</Link>
        </li>
        <li>
          <button onClick={() => signOut()}>Вийти</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
