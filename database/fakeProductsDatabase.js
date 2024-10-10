export const products = [
  {
    id: 1,
    name: 'Spooky Choco',
    price: 4.2,
    description: 'dummy text',
    vegan: false,
    alcoholFree: true,
  },
  {
    id: 2,
    name: 'Strawberry Monster',
    price: 4.2,
    description: 'dummy text',
    vegan: false,
    alcoholFree: true,
  },
  {
    id: 3,
    name: 'Pumpkin Seeds with Marzipan',
    price: 5.3,
    description: 'dummy text',
    vegan: false,
    alcoholFree: false,
  },
  {
    id: 4,
    name: 'Pumpkin Caramel and Strawberries',
    price: 4.7,
    description: 'dummy text',
    vegan: false,
    alcoholFree: false,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}

// CREATE TABLE products (
// id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
// name varchar(40) NOT NULL,
// price integer NOT NULL,
// description varchar(100),
// isVegan boolean,
// alcoholFree boolean
// );

// INSERT INTO products
// (name, price, description, isVegan, alcoholFree)
// VALUES
// ('Christmas Miracle', 4.95, 'A vegan coconut caramel bar with an exciting coconut flavour and a fine, caramelly sweetness. Created from coconut milk, caramelised, finely milled coconut flakes, 40% cacao and coconut sugar which is derived from the flower buds of the coconut tree and develops a beautiful caramel flavour.', true, true);
