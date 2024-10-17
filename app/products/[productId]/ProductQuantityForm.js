'use client';
import { useState } from 'react';
import styles from '../../styles/product-quantity-form.module.scss';
import createOrUpdateCookie from './actions';

export default function ProductQuantityForm(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <form className={styles.formContainer}>
      <div className={styles.label}>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.currentTarget.value))}
          data-test-id="product-quantity"
          className={styles.input}
        />
      </div>
      <button
        data-test-id="product-add-to-cart"
        className={styles.button}
        formAction={() => createOrUpdateCookie(props.productId, quantity)}
      >
        Add to Cart
      </button>
    </form>
  );
}
