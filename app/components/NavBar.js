import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';
import { cartCookieName } from '../util/cartCookie';
import { getCookieValue } from '../util/cookies';

export default async function Nav() {
  let products = await getCookieValue(cartCookieName);

  if (!Array.isArray(products)) {
    products = [];
  }

  let productsInCart = 0;
  if (products) {
    productsInCart = products.reduce(
      (total, product) => total + product.quantity,
      0,
    );
  }

  return (
    <nav>
      <div>
        <nav className={styles.navBar}>
          <Link href="/">Home</Link>
          <Link href="/products" data-test-id="products-link">
            Products
          </Link>
          <Link href="/cart" data-test-id="cart-link">
            <div className={styles.cartIconContainer}>
              Cart
              <Image src="/cart-icon.svg" alt="Cart" width={30} height={30} />
              {productsInCart > 0 && (
                <div className={styles.cartCount} data-test-id="cart-count">
                  {productsInCart}
                </div>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </nav>
  );
}
