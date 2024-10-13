// Real database file

import { cache } from 'react';
import { sql } from './connect';

type Product = {
  id: number;
  name: string;
  price: number;
  description: null | string;
  isVegan: null | boolean;
  alcoholFree: null | boolean;
};

export const getProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
  SELECT
    id,
    name,
    price::float8 AS price, -- Cast NUMERIC to a float
    description,
    isvegan AS "isVegan",
    alcoholfree AS "alcoholFree"
  FROM
    products;
`;

  return products;
});

export const getProductInsecure = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  SELECT
    id,
    name,
    price::float8 AS price, -- Cast NUMERIC to a float
    description,
    isvegan AS "isVegan",
    alcoholfree AS "alcoholFree"
  FROM
    products
  WHERE
    id = ${id}
`;
  return product;
});

// Fake Database
// export const products = [
// {
//   id: 1,
//   name: 'Spooky Choco',
//   price: 4.2,
//   description: 'dummy text',
//   isVegan: false,
//   alcoholFree: true,
// },
// {
//   id: 2,
//   name: 'Strawberry Monster',
//   price: 4.2,
//   description: 'dummy text',
//   vegan: false,
//   alcoholFree: true,
// },
// {
//   id: 3,
//   name: 'Pumpkin Seeds with Marzipan',
//   price: 5.3,
//   description: 'dummy text',
//   vegan: false,
//   alcoholFree: false,
// },
// {
//   id: 4,
//   name: 'Pumpkin Caramel and Strawberries',
//   price: 4.7,
//   description: 'dummy text',
//   vegan: false,
//   alcoholFree: false,
// },
// ];

// export function getProducts() {
//   return products;
// }

// export function getProduct(id) {
//   return products.find((product) => product.id === id);
// }
