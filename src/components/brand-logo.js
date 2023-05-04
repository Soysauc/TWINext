import * as React from 'react';
import Image from 'next/image';

export default function BrandLogo() {
  return (
    <div
      className='logo-container'
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <img
        style={{ maxWidth: '290px' }}
        src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/TWI-Updated-Logo-35.png'
        alt='logo'
      />
    </div>
  );
}
