/* eslint-disable react/jsx-key */
import * as React from 'react';
import Layout from './components/layout';
import Link from 'next/link';
// import SEOHead from '../components/head';
// import { Button } from '../components/ui';

const faqs = [
  {
    q: 'What exactly is The Walters Institute?',
    a: 'On-demand tax planning, education, and support for financial advisors and their HNW clients and prospects.',
  },
  {
    q: 'Will you join calls with me and my prospects to help sell the strategies?',
    a: 'Definitely. Your dedicated CPA will be available to support you when you present plans to your prospects. We position you as the expert and fill in any gaps to help you build trust with potential clients.',
  },
  {
    q: 'What makes you different from any other CPAs I’ve worked with?',
    a: 'Most CPAs spend a lot of time in tax preparation, creating a picture of what’s happened in the past. We work exclusively in tax planning, looking ahead to reduce and even eliminate tax liabilities in the future.',
  },
  {
    q: 'Aside from custom tax plans, what other support do you provide to FAs?',
    a: 'Most CPAs are transactional and focused on helping clients maintain regulatory compliance with their annual tax returns. Our approach is relational and value-based, proactively helping your clients reduce future tax liabilities in a compliant manner while increasing your referability as an advisor.',
  },
  {
    q: 'Can you help me with marketing to upmarket prospects?',
    a: 'Once you become a Concierge client, there are several ways we can help you share your practice’s story with HNW families, including online marketing, referral events, and dinner seminars. For more information, please reach out directly.',
  },
  {
    q: 'What else can I be doing to make my practice more attractice to HNW clients?',
    a: 'Having a team of in-house and outsourced talent that represent the four pillars of a family office (investment, tax planning, real estate, and legal) makes all the difference when positioning your practice as the right choice for HNW families. If you’d like a better understanding of how to unify these four disciplines and create a highly attractive environment for affluent clients, sign up for our Fundamentals course here.',
  },
  {
    q: 'How do I know if TWI is a good fit for my practice?',
    a: 'We work with Registered Representatives, IARs, and RIAs who are actively pursuing upmarket clients and looking to increase the proportion of HNW families in their practice.',
  },
  {
    q: 'Do you prepare tax plans that I can use with my prospects?',
    a: 'Absolutely. All Concierge-level subscriptions come with two or more custom monthly tax plans for your prospects and/or existing clients.',
  },
  {
    q: 'How much does it cost to have you as my practice’s tax planning partner?',
    a: 'You can check out pricing information here.',
  },
  {
    q: 'How quickly will I be able to start closing new HNW prospects?',
    a: 'While speaking the language of tax planning is a must for attracting upmarket clients, there are many factors that affect how quickly you will begin to close new business. These include your marketing strategies, current prospect pipeline, existing client base, and overall industry experience. If you’re an active advisor with a strong team, you can expect to start seeing results within 3-5 months.',
  },
  {
    q: 'How do I maximize the power of tax planning to grow my practice?',
    a: 'It all comes down to understanding the language that HNW families are looking for when choosing a financial advisor. Once you start speaking to their tax mitigation needs the right way – along with proving the ability to effectively execute the strategies – you’ll find it much easier to win the trust of upmarket prospects.',
  },
  {
    q: 'What are the best ways to get in front of more HNW families?',
    a: 'Having a team of in-house and outsourced talent that represent the four pillars of a family office (investment, tax planning, real estate, and legal) makes all the difference when positioning your practice as the right choice for HNW families. If you’d like a better understanding of how to unify these four disciplines and create a highly attractive environment for affluent clients, sign up for our Fundamentals course here.',
  },
  {
    q: 'How long is your training program?',
    a:
      'Our comprehensive tax planning course comes in at 19 hours:' +
      '1.	Fundamentals & Capital Gains Tax Planning: three hours of recorded material + six weekly roundtable discussions at an hour a piece.' +
      '2.	Business Owner Tax Planning: ten hours of recorded material.',
  },
  {
    q: 'Will The Walters Institute fit within my compliance requirements?',
    a: 'It all comes down to your Broker Dealer. Some BDs don’t want to take the risk of having a CPA involved in their firm while others welcome the partnership. If your BD isn’t willing to let you embark on this path, let’s schedule a call to discuss your options.',
  },
];

export default function WhoWeAre() {
  const [open, setOpen] = React.useState(-1);

  const oncClick = (index) => {
    if (index === open) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  return (
    <Layout>
      <div className='faq-page-wrapper'>
        <svg
          style={{
            width: '100%',
            maxHeight: '1175px',
            position: 'relative',
            zIndex: '0',
            marginTop: '0px',
          }}
          viewBox='0 0 1175 1175'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='587.5' cy='587.5' r='487.5' fill='#FBC300' />
        </svg>
        <h1 className='faq-page-title'>
          You Asked. <br></br>
          We answered.
        </h1>
        <h3
          style={{
            fontSize: '30px',
            fontWeight: '500',
            color: 'black',
            marginBottom: '80px',
            zIndex: '1',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          The most common questions we hear <br></br> from the advisor
          community.
        </h3>
        <div className='faqs-wrapper'>
          {faqs.map((e, index) => {
            if (e.a === 'You can check out pricing information here.') {
              e.a = (
                <p style={{ fontSize: '20px' }}>
                  You can check out pricing information{' '}
                  <a className='faq-link' href='/pricing-structure'>
                    here.
                  </a>
                </p>
              );
            }
            if (
              e.a ===
              'Our comprehensive tax planning course comes in at 19 hours:1.	Fundamentals & Capital Gains Tax Planning: three hours of recorded material + six weekly roundtable discussions at an hour a piece.2.	Business Owner Tax Planning: ten hours of recorded material.'
            ) {
              e.a = (
                <p style={{ fontSize: '20px' }}>
                  Our comprehensive tax planning course comes in at 19 hours:{' '}
                  <br></br> 1. Fundamentals & Capital Gains Tax Planning: three
                  hours of recorded material + six weekly roundtable discussions
                  at an hour a piece. <br></br> 2. Business Owner Tax Planning:
                  ten hours of recorded material.{' '}
                </p>
              );
            }
            if (
              e.a ===
              'Having a team of in-house and outsourced talent that represent the four pillars of a family office (investment, tax planning, real estate, and legal) makes all the difference when positioning your practice as the right choice for HNW families. If you’d like a better understanding of how to unify these four disciplines and create a highly attractive environment for affluent clients, sign up for our Fundamentals course here.'
            ) {
              e.a = (
                <p style={{ fontSize: '20px' }}>
                  Having a team of in-house and outsourced talent that represent
                  the four pillars of a family office (investment, tax planning,
                  real estate, and legal) makes all the difference when
                  positioning your practice as the right choice for HNW
                  families. If you’d like a better understanding of how to unify
                  these four disciplines and create a highly attractive
                  environment for affluent clients, sign up for our Fundamentals
                  course{' '}
                  <a
                    className='faq-link'
                    style={{}}
                    href='https://buy.stripe.com/9AQbMmdmE2Hg7le9AM'
                  >
                    here.
                  </a>
                </p>
              );
            }
            return (
              <div style={{ width: '97%', marginBottom: '20px' }}>
                {open === index ? (
                  <div className='faq-wrapper-div'>
                    <div
                      className='faq-child-wrapper-div'
                      style={{
                        border: '4px solid #072AC6',
                        width: '100%',
                        backgroundColor: '#072AC6',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        height: '115px',
                        borderRadius: '20px',
                        marginBottom: '25px',
                        margin: 'auto',
                      }}
                    >
                      <p
                        style={{
                          color: '#ffffff',
                          fontSize: '25px',
                          fontWeight: '500',
                          width: '80%',
                          paddingLeft: '20px',
                          height: 'fit-content',
                          margin: 'auto',
                        }}
                      >
                        {e.q}
                      </p>

                      <svg
                        onClick={() => oncClick(index)}
                        style={{ margin: 'auto' }}
                        width='30'
                        height='6'
                        viewBox='0 0 45 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M45 6L0 6L0 0L45 0V6Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                    <p
                      style={{
                        fontSize: '20px',
                        color: 'black',
                        width: '90%',
                        margin: 'auto',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      {e.a}
                    </p>
                  </div>
                ) : (
                  <div
                    className='faq-child-wrapper-div'
                    style={{
                      border: '4px solid #072AC6',
                      width: '100%',
                      backgroundColor: '#FFFFFF',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      height: '115px',
                      borderRadius: '20px',
                      marginBottom: '25px',
                      margin: 'auto',
                    }}
                  >
                    <p
                      style={{
                        color: '#072AC6',
                        fontSize: '25px',
                        fontWeight: '500',
                        width: '80%',
                        paddingLeft: '20px',
                        height: 'fit-content',
                        margin: 'auto',
                      }}
                    >
                      {e.q}
                    </p>
                    <svg
                      onClick={() => oncClick(index)}
                      style={{ margin: 'auto' }}
                      width='25'
                      height='25'
                      viewBox='0 0 45 45'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M20 25V45H26V25H45V19H26V0H20V19H0V25H20Z'
                        fill='#072AC6'
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <svg
          style={{ maxHeight: '841px', width: '100%', marginTop: '-700px' }}
          viewBox='0 0 338 841'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='1220.5' cy='420.5' r='420.5' fill='#FFF3CA' />
        </svg>
        <svg
          style={{ maxHeight: '815px', width: '100%', marginTop: '-600px' }}
          viewBox='0 0 306 815'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='-851.5' cy='407.5' r='407.5' fill='#FFF3CA' />
        </svg>
        <div
          style={{
            background: '#072AC6',
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '-150px',
            height: '620px',
          }}
          className='millionaire faq-bottom-div-wrapper'
        >
          <div
            className='faq-bottom-div'
            style={{
              width: '75%',
              marginRight: 'auto',
              marginLeft: '10%',
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
          >
            <h2
              style={{
                fontSize: '45px',
                fontWeight: 'bold',
                lineHeight: '65px',
                marginBottom: '20px',
              }}
            >
              Don&#39;t see the answer you&#39;re looking for?
            </h2>
            <h3
              style={{
                fontSize: '30px',
                fontWeight: '500',
                paddingBottom: '50px',
              }}
            >
              Drop us a line.
            </h3>
            <Link
              className='wwd-contact-button'
              href='/contact-us'
              style={{
                backgroundColor: 'white',
                color: '#072AC6',
                fontSize: '25px',
                fontWeight: '600',
                textDecoration: 'none',
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export const Head = (props) => {
//   props.data.title = 'FAQ | The Walters Institute';
//   props.data.description =
//     'Our team of expert tax planners provide in-depth information on strategies, compliance, and more to help you make informed decisions about your financial future.';
//   const { homepage } = props.data;

//   return <SEOHead {...props.data} />;
// };
