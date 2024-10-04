import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getProduct } from '../../../database/products';

export default async function SingleProductPage(props) {
  const product = getProduct(Number((await props.params).productId));

  if (!product) {
    return notFound();
  }

  return (
    <>
      <h1>{product.name}</h1>
      <div data-test-id="product-price">Price: {product.price}</div>
      <Image
        src={`/product-images/${product.name.replace(/ /g, '-')}.jpg`}
        alt={product.name}
        data-test-id="product-image"
        width={200}
        height={200}
      />
      <Image
        src={`/product-images/product-carousel/${product.name.replace(/ /g, '-')}-carousel-2.jpg`}
        alt={product.name}
        width={200}
        height={200}
      />
      <Image
        src={`/product-images/product-carousel/${product.name.replace(/ /g, '-')}-carousel-3.jpg`}
        alt={product.name}
        width={200}
        height={200}
      />
    </>
  );
}
