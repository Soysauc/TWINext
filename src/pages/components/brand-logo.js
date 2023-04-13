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
        src='/TWILogo.png'
        alt='logo'
        width={50}
        height={50}
      />
    </div>
  );
}
