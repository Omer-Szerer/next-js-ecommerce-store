import Link from 'next/link';
import { cartCookieName } from '../../util/cartCookie';
import { getCookieValue } from '../../util/cookies';

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
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products" data-test-id="products-link">
            Products
          </Link>
          <Link href="/cart" data-test-id="cart-link">
            Cart
            <div data-test-id="cart-count">{`${productsInCart}`}</div>
          </Link>
        </nav>
      </div>
    </nav>
  );
}
