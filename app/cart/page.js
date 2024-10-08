// -- Shopping Cart Page -- //

import { cookies } from 'next/headers';
import Image from 'next/image';
import { products } from '../../database/products';
import { parseJson } from '../util/json';
import CheckoutButton from './CheckoutButton';
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

  // Round total to 2 decimal places
  const roundedTotal = total.toFixed(2);

  return (
    <>
      <h1>Your shopping cart:</h1>
      <div data-test-id="cart-total">{`Total: ${roundedTotal}`}</div>
      <CheckoutButton />
      {products.map((product) => {
        const productQuantity = productQuantities.find(
          (productObject) => product.id === productObject.id,
        );

        // Only render products that have a quantity greater than 0
        if (!productQuantity || productQuantity.quantity === 0) {
          return null; // Don't render the product if quantity is 0 or undefined
        }
        // Calculate the subtotal for the current product
        const subtotal = (product.price * productQuantity.quantity).toFixed(2);

        return (
          <div
            key={`products-${product.id}`}
            data-test-id={`cart-product-${product.id}`}
          >
            <h4>{product.name}</h4>
            <Image
              src={`/product-images/${product.name.replace(/ /g, '-')}.jpg`}
              alt={product.name}
              data-test-id="product-image"
              width={50}
              height={50}
            />
            <div data-test-id={`cart-product-quantity-${product.id}`}>
              <p> Product quantity: {productQuantity?.quantity}</p>
            </div>
            <p>Subtotal: {subtotal}</p>
            <RemoveButton productId={product.id} />
          </div>
        );
      })}
    </>
  );
}
