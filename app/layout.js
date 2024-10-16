import './styles/globals.scss';
import localFont from 'next/font/local';
import Footer from './components/footer';
import Nav from './components/NavBar';

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
        <div className="pageContainer">
          {' '}
          <header>
            <Nav />
          </header>
          <main className="contentContainer">{children}</main>{' '}
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
