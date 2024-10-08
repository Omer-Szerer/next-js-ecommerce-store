// -- Checkout Page -- //

import CheckOutForm from './CheckOutForm';

export const metadata = {
  title: 'Checkout',
  description: 'Complete your purchase',
};

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <CheckOutForm />
    </div>
  );
}
