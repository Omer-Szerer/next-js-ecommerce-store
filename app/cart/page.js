// -- Shopping Cart Page -- //

import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import styles from '../styles/cart-page.module.scss';
import { parseJson } from '../util/sjson';
import CheckoutButton from './CheckoutButton';
import RemoveButton from './RemoveButton.js';

export const metadata = {
  title: 'My Cart',
  description: 'Super quality Austrian chocolate',
};

export default async function CartPage() {
  const productQuantitiesCookie = (await cookies()).get('cart');
  const products = await getProductsInsecure();

  let productQuantities = productQuantitiesCookie
    ? parseJson(productQuantitiesCookie.value) || []
    : [];

  if (!Array.isArray(productQuantities)) {
    productQuantities = [];
  }

  // Cart total calculation
  let total = 0;
  let totalQuantity = 0; // Variable to keep track of total quantity
  for (const product of products) {
    const productQuantity = productQuantities.find(
      (productObject) => product.id === productObject.id,
    );
    if (productQuantity && productQuantity.quantity > 0) {
      // Get the product info and multiply by quantity
      total += product.price * productQuantity.quantity;
      totalQuantity += productQuantity.quantity; // Add to total quantity
    }
  }

  // Round total to 2 decimal places
  const roundedTotal = total.toFixed(2);

  return (
    <div className={styles.cartContainer}>
      {' '}
      {/* Use the new container style */}
      <h1>Your shopping cart:</h1>
      {/* Total Card - Now appears first */}
      <div className={styles.totalCard}>
        <div>
          Total ({totalQuantity} products) for {roundedTotal} €
        </div>
        <CheckoutButton className={styles.checkoutButton} />
      </div>
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
            className={styles.productCard}
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={`/product-images/${product.name.replace(/ /g, '-')}.jpg`}
                alt={product.name}
                data-test-id="product-image"
                width={100}
                height={100}
                className={styles.productImage}
              />
            </Link>
            <div className={styles.productDetails}>
              {' '}
              <h4 className={styles.productName}>{product.name}</h4>
              <div className={styles.productQuantity}>
                Quantity: {productQuantity.quantity}
              </div>
              <div className={styles.productSubtotal}>
                Subtotal: {subtotal} €
              </div>
            </div>
            <RemoveButton
              productId={product.id}
              className={styles.removeButton}
            />
          </div>
        );
      })}
    </div>
  );
}
