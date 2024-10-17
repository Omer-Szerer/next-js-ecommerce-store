// -- Thank You Page -- //

import styles from '../styles/thank-you.module.scss';

export default function ThankYouPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Thank You for Your Order!</h1>
      <p className={styles.message}>We appreciate your business!</p>
    </div>
  );
}

export const metadata = {
  title: 'Thank You!',
  description: 'Thank you for your order',
};
