// -- Shopping Cart Page -- //

import { cookies } from 'next/headers';
import Image from 'next/image';
import { getProduct, products } from '../../database/products';
import { parseJson } from '../util/json';
import RemoveButton from './RemoveButton.js';

export const metadata = {
  title: 'My Cart',
  description: 'Super quality Austrian chocolate',
};

export default async function CartPage() {
  const productQuantitiesCookie = (await cookies()).get('cart');

  let productQuantities = parseJson(productQuantitiesCookie.value) || [];

  if (!Array.isArray(productQuantities)) {
    productQuantities = [];
  }

  // Cart total calculation
  let total = 0;
  for (const product of products) {
    const productQuantity = productQuantities.find(
      (productObject) => product.id === productObject.id,
    );
    if (productQuantity && productQuantity.quantity > 0) {
      // Get the product info and multiply by quantity
      total += product.price * productQuantity.quantity;
    }
  }

  return (
    <>
      <h1>Your shopping cart:</h1>
      <div data-test-id="cart-total">{`Total: ${total}`}</div>
      {products.map((product) => {
        const productQuantity = productQuantities.find(
          (productObject) => product.id === productObject.id,
        );

        // Only render products that have a quantity greater than 0
        if (!productQuantity || productQuantity.quantity === 0) {
          return null; // Don't render the product if quantity is 0 or undefined
        }

        return (
          <div key={`products-${product.id}`}>
            <h4>{product.name}</h4>
            <Image
              src={`/product-images/${product.name.replace(/ /g, '-')}.jpg`}
              alt={product.name}
              data-test-id="product-image"
              width={50}
              height={50}
            />
            <h4> {productQuantity?.quantity}</h4>
            <RemoveButton productId={product.id} />
          </div>
        );
      })}
    </>
  );
}
