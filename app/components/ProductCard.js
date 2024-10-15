import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Image
        src={`/product-images/${product.name.replace(/ /g, '-')}.jpg`}
        alt={product.name}
        width={200}
        height={200}
      />
      <h2>{product.name}</h2>
      <div data-test-id="product-price">Price: {product.price}</div>
      <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
