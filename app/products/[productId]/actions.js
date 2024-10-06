'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function createOrUpdateCookie(productId, quantity) {
  // 1. get current cookie!
  const productsQuantityCookie = await getCookie('productsQuantity');

  // 2. parse the cookie value
  const productsQuantity =
    productsQuantityCookie === undefined
      ? []
      : parseJson(productsQuantityCookie);

  // 3. edit the cookie value
  const productToUpdate = productsQuantity.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  // Case B: cookie set, id doesn't exist
  productsQuantity.push({ id: productId, quantity: quantity });
  if (!productToUpdate) {
  } else {
    // Case C: cookie set, id exists already
    productToUpdate.quantity = quantity;
  }

  // 4. we override the cookie
  (await cookies()).set('productQuantity', JSON.stringify(productsQuantity));
}
