// -- Products Page -- //

import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import { parseJson } from '../util/json';

// import AddToCartButton from '../AddToCartButton';

export const metadata = {
  title: 'Products',
  description: 'Super quality Austrian chocolate',
};

export default async function ProductsPage() {
  const productQuantitiesCookie = (await cookies()).get('cart');

  let productQuantities = productQuantitiesCookie
    ? parseJson(productQuantitiesCookie.value) || []
    : [];

  if (!Array.isArray(productQuantities)) {
    productQuantities = [];
  }
  return (
    <div>
      <h1>Our Products</h1>
      {products.map((product) => {
        return (
          <div key={`products-${product.id}`}>
            {/* <AddToCartButton /> */}
            <Link
              href={`/products/${product.id}`}
              data-test-id={product - `${product.id}`}
            >
              <h1>{product.name}</h1>
              <Image
                src={`/product-images/${product.name.replace(/ /g, '-')}.jpg`}
                alt={product.name}
                data-test-id="product-image"
                width={200}
                height={200}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
