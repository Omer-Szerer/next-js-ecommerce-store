'use client';
import { useState } from 'react';
import createOrUpdateCookie from './actions';

export default function ProductQuantityForm({ productId }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <form>
      <label>
        Quantity:
        <input
          type="number"
          min={1}
          value={quantity}
          name={`quantity-product-${productId}`}
          onChange={(event) => setQuantity(Number(event.currentTarget.value))}
          data-test-id="product-quantity"
        />
        <button
          data-test-id="product-add-to-cart"
          formAction={() => createOrUpdateCookie(productId, quantity)}
        >
          Add to cart
        </button>
      </label>
    </form>
  );
}
