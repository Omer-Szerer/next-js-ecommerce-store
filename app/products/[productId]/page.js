// -- Individual Product Page -- //

import { cookies } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getProduct } from '../../../database/products';
import { parseJson } from '../../util/json';
import ProductQuantityForm from './ProductQuantityForm';

// Each product page has a relevant title with the product name
export async function generateMetadata(props) {
  const productId = Number((await props.params).productId);
  const product = getProduct(productId);

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
  const product = getProduct(Number((await props.params).productId));

  const productQuantitiesCookie = (await cookies()).get('productsQuantities');

  let productQuantities = parseJson(productQuantitiesCookie.value) || [];

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
      <div>{productQuantityToDisplay?.quantity}</div>
      <ProductQuantityForm productId={product.id} />
    </>
  );
}
