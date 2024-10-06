// -- Shopping Cart Page -- //

import { cookies } from 'next/headers';
import Image from 'next/image';
import { products } from '../../database/products';
import { parseJson } from '../util/json';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Super quality Austrian chocolate',
};

export default async function CartPage() {
  const productQuantitiesCookie = (await cookies()).get('productsQuantities');

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
          </div>
        );
      })}
    </>
  );
}
