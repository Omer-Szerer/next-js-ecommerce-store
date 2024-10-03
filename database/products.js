export const products = [
  {
    id: 1,
    name: 'Spooky Choco',
    price: 4.2,
    vegan: false,
    alcoholFree: true,
  },
  {
    id: 2,
    name: 'Strawberry Monster',
    price: 4.2,
    vegan: false,
    alcoholFree: true,
  },
  {
    id: 3,
    name: 'Pumpkin Seeds with Marzipan',
    price: 5.3,
    vegan: false,
    alcoholFree: false,
  },
  {
    id: 4,
    name: 'Pumpkin Caramel and Strawberries',
    price: 4.7,
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
