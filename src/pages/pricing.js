import React, { useEffect } from 'react';
import Layout from './components/layout';
import Checkmark from './components/checkmark';
// import { Button } from '../components/ui.js';
// import { useMediaQuery } from 'react-responsive';
// import SEOHead from '../components/head';

export default function PricingStructure() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [rtdate, setrtDate] = React.useState('');

  // const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const onClick = () => {
    setOpen(!open);
  };

  const onClick1 = () => {
    setOpen1(!open1);
  };

  const onClick2 = () => {
    setOpen2(!open2);
  };

  // useEffect(() => {
  //   if (isMobile === true) {
  //     setOpen(false);
  //     setOpen1(false);
  //     setOpen2(false);
  //   }
  // }[isMobile]);

  const onSelect = (date) => {
    setrtDate(date);
  };

  return (
    <Layout>
      <svg
        style={{
          width: '100%',
          maxHeight: '1307px',
          marginBottom: '-1200px',
          position: 'relative',
          zIndex: '0',
        }}
        viewBox='0 0 520 1307'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='1249' cy='653.5' rx='449' ry='453.5' fill='#D0D7F5' />
      </svg>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <h1
          className='pricing-header'
          style={{
            fontSize: '60px',
            color: 'black',
            textAlign: 'center',
            marginBottom: '175px',
            marginTop: '75px',
          }}
        >
          Packages as unique as your practice.
        </h1>
        <div className='pricing-cards-wrapper'>
          <div className='pricing-card'>
            <div class='card-topper'></div>
            <h2
              style={{
                fontSize: '45px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              Education
            </h2>
            <h3
              style={{
                fontSize: '19px',
                fontWeight: '500',
                color: 'black',
                width: '50%',
                textAlign: 'center',
                margin: 'auto',
                marginTop: '0px',
              }}
            >
              one-time investment of
            </h3>
            <h2
              style={{
                fontSize: '45px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '50px',
                fontWeight: '400',
                marginTop: '5px',
              }}
            >
              $999
            </h2>
            <p className='education__card-text'>
              Learn the basics of tax strategy and how to build credibility with
              HNW prospects. Best for newer advisors under $40M AUM.
            </p>

            {open ? (
              <div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    Top seven tax strategies for attracting HNW clients
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    Six live roundtable discussions + three hours of video
                    lectures
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    30-minute one-on-one with a certified tax planner
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    margin: 'auto',
                    marginTop: '40px',
                    marginBottom: '50px',
                    justifyContent: 'center',
                  }}
                >
                  {/* <Button
                    className='signup-button'
                    to='/education'
                    style={{
                      backgroundColor: '#072AC6',
                      color: '#FFFFFF',
                      fontSize: '20px',
                      paddingLeft: '90px',
                      paddingRight: '90px',
                      textAlign: 'center',
                    }}
                  >
                    Learn more
                  </Button> */}
                </div>

                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    onClick={onClick}
                    src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Vector-28-1.png'
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <img
                  onClick={onClick}
                  src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Vector-27.png'
                />
              </div>
            )}
          </div>

          <div className='pricing-card'>
            <div class='card-topper'></div>
            <h2
              style={{
                fontSize: '45px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              Concierge
            </h2>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'black',
                width: '50%',
                textAlign: 'center',
                margin: 'auto',
                marginTop: '5px',
              }}
            >
              starts at
            </h3>
            <h2
              style={{
                fontSize: '45px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '50px',
                fontWeight: '400',
                marginTop: '5px',
              }}
            >
              $2,500 / mo
            </h2>
            <p className='education__card-text'>
              On-demand tax plans and on-call CPAs for more established
              practices. Best for IRAs and RIAs with $40M - $300M AUM.
            </p>

            {open1 ? (
              <div>
                <div className='education__checks'>
                  <Checkmark />
                  <p
                    style={{
                      fontWeight: 'bold',
                    }}
                  >
                    The TWI Guarantee*
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    Comprehensive tax training program (20+ strategies)
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>Dedicated tax strategy CPA</p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    2+ tailored on-demand tax plans per month
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    Joint calls with your HNW prospects
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    Joint calls with your prospect’s CPA and/or attorney
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    One-hour, monthly one-on-one with your CPA
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>Weekly case studies</p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    Regular updates on regulatory changes & phase-outs
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>Zero long-term committment</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    margin: 'auto',
                    marginTop: '40px',
                    marginBottom: '50px',
                    justifyContent: 'center',
                  }}
                >
                  {/* <Button
                    className='signup-button'
                    to='https://calendly.com/d/dvj-7hw-fd9/intro-virtual-meeting-with-the-walters-institute'
                    style={{
                      backgroundColor: '#072AC6',
                      color: '#FFFFFF',
                      fontSize: '20px',
                      paddingLeft: '60px',
                      paddingRight: '60px',
                    }}
                  >
                    Schedule a call
                  </Button> */}
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    onClick={onClick1}
                    src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Vector-28-1.png'
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <img
                  onClick={onClick1}
                  src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Vector-27.png'
                />
              </div>
            )}
          </div>

          <div className='pricing-card'>
            <div class='card-topper'></div>
            <h2
              style={{
                fontSize: '45px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              Concierge Pro
            </h2>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'black',
                width: '50%',
                textAlign: 'center',
                margin: 'auto',
                marginTop: '5px',
              }}
            >
              starts at
            </h3>
            <h2
              style={{
                fontSize: '45px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '50px',
                fontWeight: '400',
                marginTop: '5px',
              }}
            >
              $10,000 / mo
            </h2>
            <p className='education__card-text'>
              Bespoke tax planning integration for sophisticated firms. Best for
              RIAs with 4+ advisors and $300M+ AUM.
            </p>

            {open2 ? (
              <div>
                <p
                  style={{
                    fontSize: '27px',
                    color: 'black',
                    width: '90%',
                    margin: 'auto',
                    marginTop: '30px',
                    textAlign: 'center',
                  }}
                >
                  Upgrades from concierge:
                </p>
                <div className='education__checks'>
                  <Checkmark />
                  <p
                    style={{
                      fontWeight: 'bold',
                    }}
                  >
                    The TWI Pro Guarantee**
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    5+ tailored on-demand tax plans per month
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    Customized education programs for your entire team
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>
                    Tax strategy training as a recruitment tool
                  </p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>Radio & webinar appearances</p>
                </div>
                <div className='education__checks'>
                  <Checkmark />
                  <p className='education__text'>Speaking engagements</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    margin: 'auto',
                    marginTop: '40px',
                    marginBottom: '50px',
                    justifyContent: 'center',
                  }}
                >
                  {/* <Button
                    className='signup-button'
                    to='https://calendly.com/d/dvj-7hw-fd9/intro-virtual-meeting-with-the-walters-institute'
                    style={{
                      backgroundColor: '#072AC6',
                      color: '#FFFFFF',
                      fontSize: '20px',
                      paddingLeft: '60px',
                      paddingRight: '60px',
                    }}
                  >
                    Schedule a call
                  </Button> */}
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    onClick={onClick2}
                    src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Vector-28-1.png'
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <img
                  onClick={onClick2}
                  src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Vector-27.png'
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <svg
        style={{ width: '100%', maxHeight: '772px', marginTop: '-750px' }}
        viewBox='0 0 394 772'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='-750' cy='386' r='286' fill='#FFF3CA' />
      </svg>
      <div
        className='guarantees-pricing'
        style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'row',
          margin: 'auto',
          justifyContent: 'space-evenly',
          marginTop: '100px',
        }}
      >
        <div>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M35.52 12.92L24.6 13.88L31.2 5.35999L23.04 0.319994L17.88 10.4L12.72 0.319994L4.68 5.35999L11.16 13.88L0.36 12.92V22.52L11.16 21.68L4.68 30.08L12.72 35.12L17.88 25.04L23.04 35.12L31.2 30.08L24.6 21.68L35.52 22.52V12.92Z'
              fill='#072AC6'
            />
          </svg>
          <div
            className='guarantees'
            style={{
              width: '90%',
              backgroundColor: '#072AC6',
              borderRadius: '14px',
            }}
          >
            <h2
              style={{
                fontSize: '45px',
                color: 'white',
                textAlign: 'left',
                marginBottom: '10px',
                width: '90%',
                margin: 'auto',
                paddingTop: '20px',
              }}
            >
              The TWI Guarantee
            </h2>
            <p
              style={{
                fontSize: '27px',
                color: '#FFFFFF',
                width: '90%',
                margin: 'auto',
                marginTop: '30px',
                paddingBottom: '20px',
              }}
            >
              If we can’t help you increase your firm’s income by at least $75K
              in the first year, we’ll work for free until we do.
            </p>
          </div>
        </div>
        <div
          className='guarantee-2'
          style={{ marginLeft: '150px', position: 'relative', zIndex: '1' }}
        >
          <svg
            width='84'
            height='36'
            viewBox='0 0 84 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M35.52 12.92L24.6 13.88L31.2 5.35999L23.04 0.319994L17.88 10.4L12.72 0.319994L4.68 5.35999L11.16 13.88L0.36 12.92V22.52L11.16 21.68L4.68 30.08L12.72 35.12L17.88 25.04L23.04 35.12L31.2 30.08L24.6 21.68L35.52 22.52V12.92ZM83.3325 12.92L72.4125 13.88L79.0125 5.35999L70.8525 0.319994L65.6925 10.4L60.5325 0.319994L52.4925 5.35999L58.9725 13.88L48.1725 12.92V22.52L58.9725 21.68L52.4925 30.08L60.5325 35.12L65.6925 25.04L70.8525 35.12L79.0125 30.08L72.4125 21.68L83.3325 22.52V12.92Z'
              fill='#FBC300'
            />
          </svg>
          <div
            className='guarantees'
            style={{
              width: '90%',
              backgroundColor: '#FBC300',
              borderRadius: '14px',
            }}
          >
            <h2
              style={{
                fontSize: '45px',
                color: 'black',
                textAlign: 'left',
                marginBottom: '10px',
                width: '90%',
                margin: 'auto',
                paddingTop: '20px',
              }}
            >
              The TWI Pro Guarantee
            </h2>
            <p
              style={{
                fontSize: '27px',
                color: 'black',
                width: '90%',
                margin: 'auto',
                marginTop: '30px',
                paddingBottom: '20px',
              }}
            >
              If we can’t help you increase your firm’s income by at least $150K
              in the first year, we’ll work for free until we do.
            </p>
          </div>
        </div>
      </div>
      <svg
        style={{
          width: '100%',
          maxHeight: '715px',
          marginTop: '-250px',
          position: 'relative',
          zIndex: '0',
          marginBottom: '-550px',
        }}
        viewBox='0 0 507 815'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='1207.5' cy='407.5' r='307.5' fill='#FFF3CA' />
      </svg>
      <div
        style={{ display: 'none' }}
        className='pricing-structure-bottom-ellipse'
      >
        <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-16.png' />
      </div>
      <div
        style={{
          background: '#072AC6',
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '250px',
          height: '420px',
        }}
      >
        <div
          className='pricing-structure-bottom'
          style={{
            width: '55%',
            marginRight: 'auto',
            marginLeft: '10%',
            marginTop: '50px',
          }}
        >
          <h1 style={{ fontSize: '45px', fontWeight: 'bold', color: 'white' }}>
            Want to learn more?
          </h1>
          <h3
            style={{
              fontSize: '30px',
              fontWeight: '500',
              paddingBottom: '50px',
              color: 'white',
            }}
          >
            We’re pretty nice to talk to.
          </h3>
          {/* <Button
            to='/contact-us'
            style={{
              backgroundColor: 'white',
              color: '#072AC6',
              fontSize: '25px',
            }}
          >
            Get in touch
          </Button> */}
        </div>
      </div>
    </Layout>
  );
}

// export const Head = (props) => {
//   props.data.title = 'Pricing | The Walters Institute';
//   props.data.description =
//     "The Walter's Institute offers tax strategy education and support for financial advisors.";
//   const { homepage } = props.data;

//   return <SEOHead {...props.data} />;
// };
