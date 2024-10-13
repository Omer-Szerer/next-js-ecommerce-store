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
