'use client';
import { useRouter } from 'next/navigation';
import styles from '../styles/cart-page.module.scss';

export default function CartCheckOutButton() {
  const router = useRouter();

  return (
    <button
      className={styles.checkoutButton}
      onClick={() => {
        router.push('/checkout'); // Navigates to the checkout page
      }}
      data-test-id="cart-checkout"
    >
      Checkout
    </button>
  );
}
