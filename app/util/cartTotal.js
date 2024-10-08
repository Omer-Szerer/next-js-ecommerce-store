import { cookies } from 'next/headers';
import { parseJson } from './json';

// Utility function to calculate the total items in the cart
export async function getCartTotalItems() {
  const productQuantitiesCookie = (await cookies()).get('cart');

  let productQuantities = productQuantitiesCookie
    ? parseJson(productQuantitiesCookie.value) || []
    : [];

  if (!Array.isArray(productQuantities)) {
    productQuantities = [];
  }

  let totalItems = 0;
  for (const product of productQuantities) {
    totalItems += product.quantity;
  }

  return totalItems;
}
