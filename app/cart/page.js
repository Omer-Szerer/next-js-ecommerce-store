// -- Shopping Cart Page -- //

import { cookies } from 'next/headers';
import Image from 'next/image';
import { products } from '../../database/products';
import { parseJson } from '../util/json';
import RemoveButton from './RemoveButton.js';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Super quality Austrian chocolate',
};

export default async function CartPage() {
  const productQuantitiesCookie = (await cookies()).get('cart');

  let productQuantities = parseJson(productQuantitiesCookie.value) || [];

  if (!Array.isArray(productQuantities)) {
    productQuantities = [];
  }

  return (
    <>
      <h1>Your shopping cart:</h1>
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
