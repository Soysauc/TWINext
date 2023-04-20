import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-child-wrapper'>
        <div className='footer-grandchild-wrapper'>
          <h2 className='footer__title'>Tax strategies that deliver.</h2>
          <div className='footer-nav-menu'>
            <div className='footer-left-nav'>
              <p className='footer__links'>
                <Link href='/who-we-are'>Who We Are</Link>
              </p>
              <p className='footer__links'>
                <Link href='/what-we-do'>What We Do</Link>
              </p>
              <p className='footer__links'>
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </p>
            </div>

            <div className='footer-right-nav'>
              <p className='footer__links'>
                <Link href='/pricing-structure'>Pricing</Link>
              </p>
              <p className='footer__links'>
                <Link href='/faq'>FAQ</Link>
              </p>
              <p className='footer__links'>
                <Link href='/insights'>Insights</Link>
              </p>
            </div>
            <div className='footer-right-nav'>
              <p className='footer__links'>
                <Link href='/contact-us'>Contact</Link>
              </p>

              <p className='footer__links'>
                <Link href='/education'>Education</Link>
              </p>

              <a href='https://www.linkedin.com/company/heathwalterseducation/'>
                <Image
                  height={35}
                  width={35}
                  src='/linkedin.png'
                  alt='linkedin'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-image-wrapper'>
          <Image
            height={125}
            width={125}
            src='/TWILogo.png'
            alt='footer-logo'
          />
        </div>
      </div>

      <p className='footer-cc'>
        © The Walters Institute 2023. All rights reserved.
      </p>
    </div>
  );
}
