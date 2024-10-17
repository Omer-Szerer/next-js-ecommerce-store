// -- Individual Product Page -- //

import { cookies } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
import styles from '../../styles/product-page.module.scss';
import { parseJson } from '../../util/sjson';
import ProductQuantityForm from './ProductQuantityForm';

export async function generateMetadata(props) {
  const productId = Number((await props.params).productId);
  const product = await getProductInsecure(productId);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: product.name,
    description: `Details about ${product.name}`,
  };
}

export default async function SingleProductPage(props) {
  const product = await getProductInsecure(
    Number((await props.params).productId),
  );

  const productQuantitiesCookie = (await cookies()).get('cart');

  let productQuantities = productQuantitiesCookie
    ? parseJson(productQuantitiesCookie.value) || []
    : [];

  if (!product) {
    return notFound();
  }

  if (!Array.isArray(productQuantities)) {
    productQuantities = [];
  }

  const productQuantityToDisplay = productQuantities.find((productQuantity) => {
    return productQuantity.id === product.id;
  });

  return (
    <div className={styles.productContainer}>
      <h1 className={styles.productName}>{product.name}</h1>
      <div className={styles.productPrice} data-test-id="product-price">
        Price: {product.price}
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.smallerImage}>
          <Image
            src={`/product-images/product-carousel/${product.name.replace(/ /g, '-')}-carousel-2.jpg`}
            alt={product.name}
            width={250}
            height={250}
          />
        </div>

        <div className={styles.mainImageContainer}>
          <Image
            src={`/product-images/${product.name.replace(/ /g, '-')}.jpg`}
            alt={product.name}
            data-test-id="product-image"
            width={400}
            height={400}
          />
        </div>

        <div className={styles.smallerImage}>
          <Image
            src={`/product-images/product-carousel/${product.name.replace(/ /g, '-')}-carousel-3.jpg`}
            alt={product.name}
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.totalAmount} data-test-id="product-quantity">
        Total amount: {productQuantityToDisplay?.quantity}
      </div>

      <ProductQuantityForm productId={product.id} />
    </div>
  );
}
