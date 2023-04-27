import React from 'react';
import Layout from './components/layout';
import Link from 'next/link';
import Image from 'next/image';
// import SEOHead from "../components/head"

export default function WhatWeDo() {
  return (
    <Layout>
      <div className='wwd__container'>
        <div className='carousel-wwd'>
          <div className='carousel-wwd-words'>
            <h1 className='wwd__title'>What We Do</h1>
            <h3 className='wwd__excerpt'>
              On-demand tax planning, education, and support for financial
              advisors and their HNW clients and prospects.{' '}
            </h3>
          </div>
          <div className='wwd__image-container'>
            <Image
              className='wwd-carousel-image'
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Group-of-People-1-copy.png'
              width={800}
              height={850}
              alt='people'
            />
          </div>
        </div>

        <div className='wwd__millionaire'>
          <div className='wwd__div5'>
            <h1 style={{ fontSize: '60px', marginBottom: '0' }}>
              Our Secret Sauce
            </h1>
            <h3
              style={{ fontSize: '35px', fontWeight: '500', marginTop: '10px' }}
            >
              We work at the intersection of tax planning, investment, and
              estate strategy.
            </h3>
          </div>
          <div className='wwd__point-cards right-justify'>
            <div style={{ width: '60%' }}>
              <h1 className='wwd__point-title'>On-Demand Support</h1>
              <h3 className='wwd__point-text'>
                Forget weeks of waiting. Our team helps you turn around
                client-specific tax mitigation strategies in just five days.
              </h3>
            </div>
            <div className='icon-container'>
              <img
                className='icon-image wwd'
                src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/timer-ellipse.png'
                alt='ribbon'
              />
            </div>
          </div>
          <div className='wwd__point-cards left-justify'>
            <div className='icon-container'>
              <img
                className='icon-image wwd'
                src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/book-circle-ellipse.png'
                alt='ribbon'
              />
            </div>
            <div style={{ width: '60%' }}>
              <h1 className='wwd__point-title'>Effective Education</h1>
              <h3 className='wwd__point-text'>
                eLearning for tax strategies, messaging, and more that builds
                the expertise and confidence to close HNW prospects.
              </h3>
            </div>
          </div>

          <div className='wwd__point-cards right-justify'>
            <div style={{ width: '60%' }}>
              <h1 className='wwd__point-title'>A Partner Approach</h1>
              <h3 className='wwd__point-text'>
                A dedicated CPA who positions you as a tax expert to your
                clients.{' '}
              </h3>
            </div>
            <div className='icon-container'>
              <img
                className='icon-image wwd'
                src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/handshake-circle-ellipse.png'
                alt='ribbon'
              />
            </div>
          </div>

          <div
            className='wwd__point-cards left-justify'
            style={{
              marginBottom: '75px',
            }}
          >
            <div className='icon-container'>
              <img
                className='icon-image wwd'
                src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/monitor-ellipse-circle.png'
                alt='ribbon'
              />
            </div>
            <div style={{ width: '60%' }}>
              <h1 className='wwd__point-title'>Regulatory Monitoring</h1>
              <h3
                className='wwd__point-text'
                style={{
                  marginBottom: '75px',
                }}
              >
                Up-to-the-minute compliance ensures strategies remain viable and
                defensible.
              </h3>
            </div>
          </div>
        </div>
        <svg
          className='process-svg'
          style={{ marginTop: '150px', marginBottom: '-650px' }}
          width='229'
          height='562'
          viewBox='0 0 229 562'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse cx='-50' cy='281' rx='279' ry='281' fill='#D0D7F5' />
        </svg>

        <div className='third-home-div-wwd'>
          <div style={{ width: '100%', margin: '75px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '60px', marginBottom: '0' }}>Our Process</h1>
            <h3
              style={{
                fontSize: '25px',
                fontWeight: '500',
                marginTop: '20px',
                width: '30%',
                margin: 'auto',
              }}
            >
              We make it easy to add tailored tax planning to your practice.
            </h3>
          </div>
        </div>
        <div className='wwd__process'>
          <h1 className='wwd__process-title'>01</h1>
          <div className='wwd__process-div'>
            <h2 className='wwd__process-text'>Discovery</h2>
            <h3 className='wwd__process-excerpt'>
              We get to know your team’s personalities, capabilities, business
              goals, and areas of specialization.
            </h3>
          </div>
        </div>
        <div className='wwd__process'>
          <h1 className='wwd__process-title'>02</h1>
          <div className='wwd__process-div'>
            <h2 className='wwd__process-text'>Education</h2>
            <h3 className='wwd__process-excerpt'>
              We teach you to identify key tax saving opportunities and
              communicate them in a way that builds credibility with HNW
              prospects.
            </h3>
          </div>
        </div>
        <div className='wwd__process'>
          <h1 className='wwd__process-title'>03</h1>
          <div className='wwd__process-div'>
            <h2 className='wwd__process-text'>Delivery</h2>
            <h3 className='wwd__process-excerpt'>
              We work with you to craft holistic tax plans and support you in
              presenting them to your clients and prospects.
            </h3>
          </div>
        </div>
        <div className='footer-ellipse-wwd' style={{ display: 'none' }}>
          <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-36.png' />
        </div>
        <div className='wwd__footer-millionaire wwd'>
          <div className='wwd-footer-div'>
            <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>
              Interested in learning more?
            </h1>
            <h3
              style={{
                fontSize: '30px',
                fontWeight: '500',
                paddingBottom: '50px',
              }}
            >
              We&#39;re always happy to chat.
            </h3>
            <Link
              className='wwd-contact-button'
              href='/contact-us'
              style={{
                backgroundColor: 'white',
                color: '#072AC6',
                fontSize: '25px',
                textDecoration: 'none',
              }}
            >
              Get in touch
            </Link>
          </div>
          <svg
            className='hide-on-mobile'
            style={{
              marginLeft: 'auto',
              overflow: 'visible',
              marginBottom: '500px',
            }}
            height='600'
            width='600'
          >
            <ellipse
              cx='600'
              cy='150'
              rx='200'
              ry='200'
              style={{ fill: '#D0D7F5', height: '600px', width: '600px' }}
            />
          </svg>
        </div>
      </div>
    </Layout>
  );
}

// export const Head = (props) => {
//     props.data.title = "What We Do | The Walters Institute";
//     props.data.description = "We offer on-demand tax planning, education, and support for financial advisors and their high net worth clients. Our team specializes in the intersection of tax planning, investment, and estate strategy and can help turn around client-specific strategies in just five days."
//     const { homepage } = props.data

//     return <SEOHead {...props.data} />
//   }
