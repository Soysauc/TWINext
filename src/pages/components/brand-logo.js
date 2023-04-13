import * as React from 'react';
import Image from 'next/image';

export default function BrandLogo() {
  return (
    <div
      className='logo-container'
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <Image
        style={{ maxWidth: '290px' }}
        src='/public/TWILogo.png'
        alt='logo'
      />
    </div>
  );
}
