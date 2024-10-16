// -- Products Page -- //

import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import AddToCartButton from '../components/AddToCartButton';
import HeroProducts from '../components/HeroProducts';
import styles from '../styles/products.module.scss';
import { parseJson } from '../util/sjson';

export const metadata = {
  title: 'Products',
  description: 'Super quality Austrian chocolate',
};

export default async function ProductsPage() {
  const products = await getProductsInsecure();

  const productQuantitiesCookie = (await cookies()).get('cart');

  let productQuantities = productQuantitiesCookie
    ? parseJson(productQuantitiesCookie.value) || []
    : [];

  if (!Array.isArray(productQuantities)) {
    productQuantities = [];
  }
  return (
    <div>
      <HeroProducts />
      {/* <h1 className={styles.title}>Our Products</h1> */}
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div key={`products-${product.id}`} className={styles.productCard}>
            <Link
              href={`/products/${product.id}`}
              data-test-id={`product-${product.id}`}
            >
              <Image
                src={`/product-images/${product.name.replace(/ /g, '-')}.jpg`}
                alt={product.name}
                data-test-id="product-image"
                width={200}
                height={200}
              />
              <h2>{product.name}</h2>
              <p className={styles.productPrice}>{product.price} €</p>
            </Link>
            <AddToCartButton productId={product.id} quantity={1} />
          </div>
        ))}
      </div>
    </div>
  );
}
