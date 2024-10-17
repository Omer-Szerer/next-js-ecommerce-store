'use server';
import { cookies } from 'next/headers';
import { parseJson } from '../../util/sjson';

export default async function createOrUpdateCookie(productId, quantity) {
  // 1. get current cookie
  const productsQuantitiesCookie = (await cookies()).get('cart');

  // 2. parse the cookie value
  const productsQuantities = !productsQuantitiesCookie
    ? // Case A: cookie undefined
      []
    : parseJson(productsQuantitiesCookie.value);

  // 3. Check if the product already exists in the cookie
  const productToUpdate = productsQuantities.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  if (!productToUpdate) {
    // Case B: Product doesn't exist, add it to the array
    productsQuantities.push({ id: productId, quantity: quantity });
  } else {
    // Case C: Product exists, update its quantity
    productToUpdate.quantity += quantity;
  }

  // 4. Override the cookie
  (await cookies()).set('cart', JSON.stringify(productsQuantities), {
    httpOnly: true,
    secure: true,
  });
}
