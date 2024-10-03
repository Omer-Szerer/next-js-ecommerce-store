import { notFound } from 'next/navigation';
import React from 'react';
import { getProduct } from '../../../database/products';

export default async function SingleProductPage(props) {
  const product = getProduct(Number((await props.params).productId));

  if (!product) {
    return notFound();
  }

  return <h1>{product.name}</h1>;
}
