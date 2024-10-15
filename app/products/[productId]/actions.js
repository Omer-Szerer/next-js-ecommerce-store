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

  // 3. edit the cookie value
  const productToUpdate = productsQuantities.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  // Case B: cookie set, id doesn't exist
  productsQuantities.push({ id: productId, quantity: quantity });
  if (!productToUpdate) {
  } else {
    // Case C: cookie set, id exists already
    productToUpdate.quantity += quantity;
  }

  // 4. we override the cookie
  (await cookies()).set('cart', JSON.stringify(productsQuantities));
}
