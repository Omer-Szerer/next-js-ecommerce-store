import Image from 'next/image';
import React from 'react';
import styles from '../styles/hero.module.scss';

export default function HeroHomepage() {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/hero-images/hero-homepage.png"
        alt="Hero image"
        className={styles.heroImage}
        width={1920}
        height={600}
      />
      <h1 className={styles.heroTitle}>Welcome to ChocoLoco</h1>
    </div>
  );
}
