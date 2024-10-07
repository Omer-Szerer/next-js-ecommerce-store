'use client';

import removeProductFromCookie from './actions';

export function RemoveButton({ productId }) {
  return (
    <button
      onClick={() => removeProductFromCookie(productId)}
      data-test-id={`cart-product-remove-${productId}`}
    >
      Remove
    </button>
  );
}
