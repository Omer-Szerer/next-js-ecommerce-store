'use server';
import { getCookie, setCookie } from '../util/cookies.js';

const cartCookieName = 'shoppingCart';

export default async function removeProductFromCookie(productId) {
  // Get product information saved in cart cookie or set to base datatype in case cookie does not exist
  let products = (await getCookie(cartCookieName)) || [];

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  // Remove product from cookie
  products = products.filter((product) => product.id !== productId);

  // Set cookie
  await setCookie(cartCookieName, products);
}
