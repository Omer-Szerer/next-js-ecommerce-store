'use client';
import styles from '../styles/cart-page.module.scss';
import removeProductFromCookie from './actions';

export default function RemoveButton({ productId }) {
  return (
    <form>
      <button
        className={styles.removeButton}
        formAction={() => removeProductFromCookie(productId)}
        data-test-id={`cart-product-remove-${productId}`}
      >
        Remove
      </button>
    </form>
  );
}
