'use client';

import removeProductFromCookie from './actions';

export default function RemoveButton({ productId }) {
  return (
    <form>
      <button
        formAction={() => removeProductFromCookie(productId)}
        data-test-id={`cart-product-remove-${productId}`}
      >
        Remove
      </button>
    </form>
  );
}
