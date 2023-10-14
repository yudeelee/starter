import Image from 'next/image';
import styles from './page.module.scss';
import { Fragment } from 'react';
import Header from '@/components/header/Header';
import Why from '@/components/why/Why';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Why />
    </Fragment>
  );
}
