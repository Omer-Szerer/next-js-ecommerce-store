import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export const metadata = {
  title: 'Products',
  description: 'Super quality Austrian chocolate',
};

export default function ProductsPage() {
  return (
    <div>
      <h1>Our Products</h1>
      {products.map((product) => {
        return (
          <div key={`products-${product.id}`}>
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
