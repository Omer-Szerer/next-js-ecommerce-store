'use client';
import createOrUpdateCookie from '../products/[productId]/actions';
import styles from '../styles/products.module.scss';

export default function AddToCartButton({ productId, quantity }) {
  return (
    <button
      className={styles.addToCartButton}
      data-test-id="product-add-to-cart"
      onClick={() => createOrUpdateCookie(productId, quantity)}
    >
      Add to Cart
    </button>
  );
}
