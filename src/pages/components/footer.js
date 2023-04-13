import * as React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-child-wrapper'>
        <div className='footer-grandchild-wrapper'>
          <h2 className='footer__title'>Tax strategies that deliver.</h2>
          <div className='footer-nav-menu'>
            <div className='footer-left-nav'>
              <p className='footer__links'>
                <a href='/who-we-are'>Who We Are</a>
              </p>
              <p className='footer__links'>
                <a href='/what-we-do'>What We Do</a>
              </p>
              <p className='footer__links'>
                <a href='/privacy-policy'>Privacy Policy</a>
              </p>
            </div>

            <div className='footer-right-nav'>
              <p className='footer__links'>
                <a href='/pricing-structure'>Pricing</a>
              </p>
              <p className='footer__links'>
                <a href='/faq'>FAQ</a>
              </p>
              <p className='footer__links'>
                <a href='/insights'>Insights</a>
              </p>
            </div>
            <div className='footer-right-nav'>
              <p className='footer__links'>
                <a href='/contact-us'>Contact</a>
              </p>

              <p className='footer__links'>
                <a href='/education'>Education</a>
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
