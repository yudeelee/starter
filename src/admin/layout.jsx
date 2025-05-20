'use client';

import Menu from '@/components/admin/menu/Menu';
import styles from './styles.module.scss';
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';
import Login from '@/components/admin/login/Login';

const layout = ({ children }) => {
  const { data: session, status } = useSession();
  return (
    <Fragment>
      {status === 'authenticated' ? (
        <div className={styles.admin}>
          <Menu />
          <div className={styles.children}>{children}</div>
        </div>
      ) : (
        <div className={styles.loginWrapper}>
          <Login />
        </div>
      )}
    </Fragment>
  );
};

export default layout;
