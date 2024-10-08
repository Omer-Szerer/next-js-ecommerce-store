'use client';

import { useRouter } from 'next/navigation';

export default function CartCheckOutButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/checkout'); // Navigates to the checkout page
      }}
      data-test-id="cart-checkout"
    >
      Checkout
    </button>
  );
}
