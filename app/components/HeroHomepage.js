import Image from 'next/image';
import React from 'react';
import styles from '../styles/hero-homepage.module.scss';

export default function HeroHomepage() {
  return (
    <>
      <div className={styles.heroContainer}>
        <Image
          src="/hero-images/hero-homepage.png"
          alt="Hero image"
          className={styles.heroImage}
          width={1920}
          height={600}
        />
        <h1 className={styles.heroTitle}>
          Welcome to
          <br />
          ChocoLoco
        </h1>
      </div>
      <div className={styles.pageContent}>
        <h2 className={styles.h2Title}>
          ChocoLoco stands for variety, quality, innovation, creativity and
          sustainability. <br />
          100% ORGANIC + FAIR TRADE + BEAN-TO-BAR
        </h2>
        <h3 className={styles.h3Title}>
          VARIETY AND CREATIVITY • 500 FLAVOURS
        </h3>
        <p className={styles.description}>
          Josef Zotter has re-invented chocolate: Hand-scooped Chocolates are
          basically giant bonbons. Featuring wonderful flavour combinations and
          distinctive, artistic sleeve designs, Hand-scooped Chocolates have
          become iconic. They’re filled chocolate miracles consisting of several
          layers, brushed onto long lanes – one on top of the other – by hand.
          Zotter’s flavour combinations are classic like »Marzipan and Almonds«
          and »Amarena cherry« and eccentric like »Olive & Lemon« and »Hemp
          Bonbon«, but all of them offer a unique flavour experience.
          Hand-scooped Chocolates are available in more than 100 flavours, all
          invented by Josef and his daughter Julia Zotter. <br />
          <br />
          From the very beginning, our good friend, artist Andreas H. Gratze has
          created many individual sleeve designs, which turn each chocolate into
          a unique work of art as well as the perfect gift.
          <br />
          <br /> We produce a total of around 500 different flavours: our range
          includes the iconic Hand-scooped Chocolates, pure single origin
          chocolates, drinking chocolates, pralines, couvertures and handmade
          organic bonbons. At our Mixing Bar, customers may create their own
          individual chocolates from various ingredients, shapes and fillings by
          picking their favourite flavours. All our chocolates are organic, fair
          and bean-to- bar.
        </p>
      </div>
      <div className={styles.homepageImages}>
        <Image
          src="/home-page/hp-1.jpg"
          alt="chocolate factory"
          width={537}
          height={359}
        />
        <Image
          src="/home-page/hp-2.jpg"
          alt="chocolate factory"
          width={537}
          height={359}
        />
        <Image
          src="/home-page/hp-3.jpg"
          alt="chocolate jungle"
          width={537}
          height={359}
        />
      </div>
    </>
  );
}
