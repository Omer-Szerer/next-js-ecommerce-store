'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/check-out.module.scss';
import { deleteCookie } from '../util/cookies';

export default function CheckOutForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const router = useRouter();

  // Function to format the card number with dashes
  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const numericValue = value.replace(/\D/g, '');

    // Format as XXXX-XXXX-XXXX-XXXX
    const formattedValue = numericValue
      .replace(/(\d{4})(?=\d)/g, '$1-') // Add a dash every 4 digits
      .slice(0, 19); // Limit to 19 characters (16 digits + 3 dashes)

    return formattedValue;
  };

  const handleCardNumberChange = (event) => {
    const formattedValue = formatCardNumber(event.target.value);
    setCardNumber(formattedValue);
  };

  return (
    <form className={styles.checkoutForm}>
      <fieldset>
        <legend>Shipping details</legend>
        <table>
          <tbody>
            <tr>
              <td>First name</td>
              <td>
                <input
                  name="firstName"
                  required
                  value={firstName}
                  onChange={(event) => setFirstName(event.currentTarget.value)}
                  data-test-id="checkout-first-name"
                />
              </td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>
                <input
                  name="lastName"
                  required
                  value={lastName}
                  onChange={(event) => setLastName(event.currentTarget.value)}
                  data-test-id="checkout-last-name"
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  name="email"
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  data-test-id="checkout-email"
                />
              </td>
            </tr>
            <tr>
              <td>Street</td>
              <td>
                <input
                  name="street"
                  required
                  value={street}
                  onChange={(event) => setStreet(event.currentTarget.value)}
                  data-test-id="checkout-address"
                />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input
                  name="city"
                  required
                  value={city}
                  onChange={(event) => setCity(event.currentTarget.value)}
                  data-test-id="checkout-city"
                />
              </td>
            </tr>
            <tr>
              <td>Postal code</td>
              <td>
                <input
                  name="postalCode"
                  required
                  value={postalCode}
                  onChange={(event) => setPostalCode(event.currentTarget.value)}
                  data-test-id="checkout-postal-code"
                />
              </td>
            </tr>
            <tr>
              <td>Country</td>
              <td>
                <input
                  name="country"
                  required
                  value={country}
                  onChange={(event) => setCountry(event.currentTarget.value)}
                  data-test-id="checkout-country"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <fieldset>
        <legend>Payment details</legend>
        <table>
          <tbody>
            <tr>
              <td>Credit card number</td>
              <td>
                <input
                  name="cardNumber"
                  required
                  type="tel"
                  pattern="\d{4}-\d{4}-\d{4}-\d{4}"
                  maxLength="19"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  data-test-id="checkout-credit-card"
                />
              </td>
            </tr>
            <tr>
              <td>Expiration date</td>
              <td>
                <input
                  name="expirationDate"
                  required
                  type="tel"
                  pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                  maxLength="5"
                  placeholder="mm/yy"
                  value={expirationDate}
                  onChange={(event) => {
                    // Get the input value
                    const inputValue = event.currentTarget.value;

                    // Format the input value
                    const formattedValue = inputValue
                      .replace(/\D/g, '') // Remove all non-digit characters
                      .replace(/(\d{2})(?=\d)/g, '$1/') // Add / after the first two digits
                      .slice(0, 5); // Limit to 5 characters (MM/YY)

                    // Update the state with the formatted value
                    setExpirationDate(formattedValue);
                  }}
                  data-test-id="checkout-expiration-date"
                />
              </td>
            </tr>
            <tr>
              <td>Security code</td>
              <td>
                <input
                  name="securityCode"
                  required
                  type="tel"
                  pattern="\d*"
                  minLength="3"
                  maxLength="3"
                  placeholder="ccv"
                  value={securityCode}
                  onChange={(event) =>
                    setSecurityCode(event.currentTarget.value)
                  }
                  data-test-id="checkout-security-code"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <button
        formAction={async () => {
          await deleteCookie('cart');
          router.push('/thank-you');
        }}
        data-test-id="checkout-confirm-order"
      >
        Confirm Order
      </button>
    </form>
  );
}
