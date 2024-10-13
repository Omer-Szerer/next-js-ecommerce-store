import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Spooky Choco',
    price: 4.2,
    description:
      'A dark chocolate with a smiling skull, made with purely plant-based white chocolate, winks at you with crispy blueberry chocolate eyes.',
    isVegan: false,
    alcoholFree: true,
  },
  {
    id: 2,
    name: 'Strawberry Monster',
    price: 4.2,
    description:
      'A sweet white chocolate decorated with a beautifully spooky raspberry coconut tentacle pattern and several marzipan googly eyes.',
    isVegan: false,
    alcoholFree: true,
  },
  {
    id: 3,
    name: 'Pumpkin Seeds with Marzipan',
    price: 5.3,
    description:
      'Dark milk chocolate 60% filled with marzipan and pumpkin seed praline. A Styrian classic',
    isVegan: false,
    alcoholFree: false,
  },
  {
    id: 4,
    name: 'Pumpkin Caramel and Strawberries',
    price: 4.7,
    description:
      '60% Dark milk chocolate filled with caramel, strawberry couverture and pumpkin seed praline with crispy waffle brittle.',
    isVegan: false,
    alcoholFree: false,
  },
  {
    id: 5,
    name: 'Christmas Miracle',
    price: 4.95,
    description:
      'A vegan coconut caramel bar with an exciting coconut flavour and a fine, caramelly sweetness.',
    isVegan: true,
    alcoholFree: true,
  },
  {
    id: 6,
    name: 'Nashido Advent Calendar',
    price: 29.9,
    description:
      'A large wall calendar containing fine, thin mini chocolate bars with delicious, creamy fillings in seductive flavours like red wine, grappa, and more.',
    isVegan: false,
    alcoholFree: false,
  },
  {
    id: 7,
    name: 'Labooko Advent Calendar',
    price: 29.9,
    description:
      'The free-standing, fold-out Labooko Advent calendar in an all-new, stylish red-and-gold design, filled with 24 different flavours, for fans of pure chocolate of the highest quality.',
    isVegan: false,
    alcoholFree: true,
  },
  {
    id: 8,
    name: 'Best of Advent Calendar VEGAN',
    price: 37.9,
    description:
      'Our mixed vegan Advent calendar with its 24 different flavours representing Zotter’s entire chocolate range is a celebration of the wide variety of vegan products.',
    isVegan: true,
    alcoholFree: true,
  },
  {
    id: 9,
    name: 'Peanut Caramel',
    price: 4.7,
    description:
      '70% Dark chocolate filled with caramel ganache and peanut praline with caramelised peanuts.',
    isVegan: false,
    alcoholFree: true,
  },
  {
    id: 10,
    name: 'Honeysuckle + Lavender',
    price: 4.7,
    description:
      '70% Dark chocolate filled with lavender macadamia praline and honeysuckle ganache.',
    isVegan: false,
    alcoholFree: true,
  },
  {
    id: 11,
    name: 'Soul Food',
    price: 4.7,
    description:
      'Caramel couverture filled with caramel almond praline and crispy waffle brittle.',
    isVegan: false,
    alcoholFree: true,
  },
  {
    id: 12,
    name: 'Deluxe VEGAN Sweet & Fine Minis',
    price: 6.5,
    description: 'Two small, vegan chocolate bars with a beautiful decor.',
    isVegan: true,
    alcoholFree: true,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO
    products (
      name,
      price,
      description,
      isVegan,
      alcoholFree
    )
    VALUES
    (
      ${product.name},
      ${product.price},
      ${product.description},
      ${product.isVegan},
      ${product.alcoholFree}
    )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
