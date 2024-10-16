import Image from 'next/image';
import React from 'react';
import styles from '../styles/hero.module.scss';

export default function HeroProducts() {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/hero-images/hero-products.png"
        alt="Hero image"
        className={styles.heroImage}
        width={1920}
        height={600}
      />
      <h1 className={styles.heroTitle}>The New Chocolate Collection!</h1>
    </div>
  );
}
