'use client';

import removeProductFromCookie from './actions';

export default function RemoveButton({ productId }) {
  console.log(RemoveButton);
  return (
    <button
      formAction={() => removeProductFromCookie(productId)}
      data-test-id={`cart-product-remove-${productId}`}
    >
      Remove
    </button>
  );
}
