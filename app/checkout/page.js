// -- Checkout Page -- //

import CheckOutForm from './CheckOutForm';

export const metadata = {
  title: 'Checkout',
  description: 'Complete your purchase',
};

export default function CheckoutPage() {
  return (
    <div>
      <CheckOutForm />
    </div>
  );
}
