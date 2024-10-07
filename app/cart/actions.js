'use server';

import { getCookieValue, setCookie } from '../util/cookies.js';

const cartCookieName = 'productsQuantities';

export default async function removeProductFromCookie(productId) {
  // Get product information saved in cart cookie or set to base datatype in case cookie does not exist
  let products = (await getCookieValue(cartCookieName)) || [];

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
    console.log(products);
  }

  // Remove product from cookie
  products = products.filter((product) => {
    console.log(product.id, productId);
    return product.id !== productId;
  });

  // Set cookie
  await setCookie(cartCookieName, products);
}
