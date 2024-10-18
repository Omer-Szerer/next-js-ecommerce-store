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
          100% ORGANIC + FAIR TRADE + BEAN-TO-BAR
        </h2>
        <h3 className={styles.h3Title}>
          VARIETY AND CREATIVITY • 500 FLAVOURS
        </h3>
        <p className={styles.description}>
          This project is a full-stack Next.js app created for a web development
          bootcamp. <br />
          Just a heads up, it’s not a real application; it’s more of a hands-on
          learning experience designed to mimic building a production-ready web
          app.
          <br />
          <br /> In this project, we’re using Next.js to create server-side
          rendered and static web pages, which helps with fast loading times and
          good SEO. The backend runs on a PostgreSQL database, giving us a solid
          way to manage our data. We’re also using cookies to handle user
          sessions, preferences, and shopping cart features, making everything
          feel more seamless.
          <br />
          <br /> TypeScript is included to help catch errors early and keep the
          code clean and easy to maintain. We’ve set up end-to-end tests to make
          sure all the features work well together and that users can navigate
          smoothly. Plus, we’ve implemented some SEO tricks to help the app get
          found by search engines. Finally, we’re following deployment practices
          that simulate what it would be like to launch the app for real, so
          it’s ready to be hosted on platforms like fly.io or others.
          <br />
          <br /> Overall, this project is a great way to see the whole web
          development process, from designing the frontend to connecting the
          backend, testing everything out, and getting it ready for deployment.
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
