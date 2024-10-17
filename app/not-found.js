import Image from 'next/image';
import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div>
      Sorry this page was not found make sure you visit a page that exists
      <div>
        <Image
          src="/public/404.png"
          alt="page not found 404 illustrations"
          width={250}
          height={250}
        />
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
