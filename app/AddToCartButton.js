'use client';

import createOrUpdateCookie from './products/[productId]/actions';

export default function AddToCartButton() {
  return (
    <button
      data-test-id="product-add-to-cart"
      formAction={() => createOrUpdateCookie(productId, quantity)}
    >
      Add to cart
    </button>
  );
}
