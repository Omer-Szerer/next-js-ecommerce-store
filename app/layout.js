import './globals.scss';
import localFont from 'next/font/local';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: {
    default: 'Home | ChocoLoco',

    template: '%s | ChocoLoco',
  },

  description: 'Super quality Austrian chocolate',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <div>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/products" data-test-id="products-link">
                Products
              </Link>
              <Link href="/about">About</Link>
              <Link href="/cart">Cart</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>All images are credited to Zotter Schokolade.</footer>
      </body>
    </html>
  );
}
