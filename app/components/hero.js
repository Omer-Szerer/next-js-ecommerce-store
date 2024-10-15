import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div>
      <Image
        src="/hero-images/hero-1.png"
        alt="Hero image"
        width={1920}
        height={600}
      />
      <h1>Welcome to ChocoLoco</h1>
    </div>
  );
}
