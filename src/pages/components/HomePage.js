import * as React from 'react';
import Layout from '../components/layout';
// import { Button, Link } from '../components/ui';
import Button from './ui.css';
import { useMediaQuery } from 'react-responsive';
export default function Homepage({ data }) {
  const [open, setOpen] = React.useState(true);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  React.useEffect(() => {
    if (isMobile === true) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <Layout>
      <link
        rel='stylesheet'
        href='https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css'
      />

      <div style={{ overflow: 'hidden' }}>
        <svg
          className='index-ellipse-1'
          style={{ width: '100%', height: '494px', marginBottom: '-500px' }}
        >
          <ellipse
            cx='5'
            cy='230'
            rx='200'
            ry='200'
            style={{ fill: '#FBC300', height: '494px', width: '494px' }}
          />
        </svg>
        {/* <div className="index-ellipse-mobile">
      <img src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-5-1.png" alt="index-ellipse-1" />
    </div> */}
        <div
          className='carousel-container'
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <div className='main-text'>
            <h1 style={{ fontSize: '50px', color: 'black' }}>
              Deliver the strategies.<br></br>
              Gain the trust.<br></br>
              Win the business.
            </h1>
            <h3
              style={{
                fontSize: '25px',
                fontWeight: '400',
                color: 'black',
                marginBottom: '80px',
              }}
            >
              On-demand tax planning for financial <br></br> advisors and their
              HNW clients.
            </h3>
            <Button
              to='https://calendly.com/d/dvj-7hw-fd9/intro-virtual-meeting-with-the-walters-institute'
              className='schedule-now'
              style={{
                fontSize: '25px',
                fontWeight: '500',
                paddingLeft: '50px',
                paddingRight: '50px',
                paddingTop: '25px',
                paddingBottom: '25px',
              }}
            >
              Schedule a call
            </Button>
          </div>
          <div
            className='image-container'
            style={{ width: '100vw', display: 'flex', justifyContent: 'end' }}
          >
            <img
              className='carousel-image'
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/11/57cdd9a3decd506fc4f4c5d02a3c3ddf.png'
              alt='financial-advisors-sitting'
            />
          </div>
        </div>
        <div className='index-ellipse-mobile2'>
          <img
            src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-5.png'
            alt='index-ellipse-2'
          />
        </div>
        <svg
          style={{ marginTop: '-650px', display: 'none' }}
          className='home-ellipse1'
          height='294'
          width='294'
        >
          <ellipse
            cx='10'
            cy='150'
            rx='100'
            ry='100'
            style={{ fill: '#FBC300', height: '494px', width: '494px' }}
          />
        </svg>

        <div
          style={{
            background: '#072AC6',
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '0',
          }}
          className='millionaire index-div'
        >
          <div
            className='child-mill'
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              marginLeft: '80px',
              width: '50%',
            }}
          >
            <h1 style={{ fontSize: '45px' }}>
              Every day, 1,700 new millionaires are minted in the United States.
            </h1>
            <h3 style={{ fontSize: '33px', fontWeight: '400' }}>
              The majority have tax mitigation as a top investment priority.
            </h3>
          </div>
          <div style={{ width: '40%', margin: 'auto', textAlign: 'center' }}>
            <img
              style={{ margin: 'auto' }}
              width={296}
              height={296}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/11/hs.png'
            />
          </div>
        </div>

        <div
          style={{
            background: '#072AC6',
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '720px',
          }}
          className='millionaire mobile'
        >
          <div
            className='child-mill'
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              width: '40%',
            }}
          >
            <p
              style={{
                fontSize: '70px',
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: '0px',
              }}
            >
              1700
            </p>
            <h3
              style={{
                fontSize: '30px',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              The number of millionaires minted in the United State every day.
            </h3>
          </div>
          <div
            style={{
              margin: 'auto',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            <img
              style={{ margin: 'auto' }}
              width={296}
              height={296}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/11/hs.png'
            />
          </div>
          <h3
            style={{
              fontSize: '30px',
              fontWeight: '300',
              textAlign: 'center',
              width: '90%',
              margin: 'auto',
              marginBottom: '105px',
            }}
          >
            The majority have tax mitigation as a top investment priority.
          </h3>
        </div>

        <svg
          className='ellipse-5'
          style={{
            maxHeight: '536px',
            width: '100%',
            marginBottom: '-300px',
            marginTop: '-100px',
            position: 'relative',
            zIndex: '0',
            display: 'none',
          }}
          width='293'
          height='736'
          viewBox='0 0 293 736'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='368' cy='368' r='168' fill='#FBC300' />
        </svg>
        <svg
          className='ellipse-5 desktop'
          style={{
            maxHeight: '536px',
            width: '100%',
            marginBottom: '-370px',
            marginTop: '-80px',
            position: 'relative',
            zIndex: '0',
            display: 'none',
          }}
          width='293'
          height='736'
          viewBox='0 0 293 736'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='-408' cy='368' r='168' fill='#FBC300' />
        </svg>

        <div
          className='third-home-div'
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: '1',
            width: '100%',
            margin: 'auto',
          }}
        >
          <h1
            className='third-home-div-header'
            style={{
              fontSize: '45px',
              width: '65%',
              margin: 'auto',
              marginTop: '75px',
              color: 'black',
              textAlign: 'center',
              marginBottom: '125px',
            }}
          >
            We give you the <span style={{ color: '#072AC6' }}>tools</span> and{' '}
            <span style={{ color: '#072AC6' }}>support</span> to speak the
            language of tax strategy that attracts HNW clients.
          </h1>

          <div
            className='tool-cards'
            style={{ width: '65%', marginRight: '100px', marginLeft: '50px' }}
          >
            <p
              style={{
                fontSize: '100px',
                width: '50%',
                fontWeight: 'bolder',
                margin: 'auto',
                color: '#072AC6',
                marginLeft: 'auto',
                marginRight: '100px',
              }}
            >
              48%
            </p>
            <h3
              style={{
                fontSize: '28px',
                fontWeight: '500',
                color: 'black',
                width: '50%',
                marginLeft: 'auto',
                marginRight: '100px',
              }}
            >
              Our average tax bill reduction for HNW families
            </h3>
          </div>

          <svg
            style={{
              marginTop: '-200px',
              marginLeft: '0',
              marginBottom: '-550px',
            }}
            className='ellipse-6'
            width='341'
            height='772'
            viewBox='0 0 341 772'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='-80' cy='400' r='286' fill='#FBC300' />
          </svg>

          <div
            className='tool-cards tool-card-1'
            style={{ width: '70%', marginLeft: 'auto', marginBottom: '40px' }}
          >
            <p
              style={{
                fontSize: '100px',
                width: '50%',
                fontWeight: 'bolder',
                margin: '0',
                color: '#072AC6',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              80%
            </p>
            <h3
              style={{
                fontSize: '28px',
                fontWeight: '500',
                color: 'black',
                width: '50%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Average closure rate for FAs when presenting strategic tax plans
              to HNW prospects
            </h3>
          </div>

          <div
            className='tool-cards'
            style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <p
              style={{
                fontSize: '100px',
                width: '50%',
                fontWeight: 'bolder',
                margin: '0',
                color: '#072AC6',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              100%
            </p>
            <h3
              style={{
                fontSize: '28px',
                fontWeight: '500',
                color: 'black',
                width: '50%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '100px',
              }}
            >
              Average 2-year AUM growth for RIAs who add tax planning to their
              practices
            </h3>
          </div>
        </div>
        <svg
          style={{
            maxHeight: '736px',
            width: '100%',
            marginTop: '-900px',
            position: 'relative',
            zIndex: '0',
          }}
          width='293'
          height='736'
          viewBox='0 0 293 736'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='968' cy='450' r='268' fill='#FBC300' />
        </svg>
        <div className='index-ellipse-mobile2'>
          <img
            src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-5.png'
            alt='index-ellipse-2'
          />
        </div>

        <div
          style={{
            background: '#072AC6',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          className='millionaire'
        >
          <div
            className='child-mill'
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              textAlign: 'center',
            }}
          >
            <h1 style={{ fontSize: '55px', fontWeight: 'bold' }}>
              Real advisors. Real results.
            </h1>
            <h3
              style={{
                fontSize: '40px',
                fontWeight: '500',
                paddingBottom: '50px',
              }}
            >
              The <span style={{ fontWeight: 'bolder' }}>only change</span>{' '}
              these practices made was adding strategic tax planning to their
              services.
            </h3>
          </div>
          <div
            style={{
              width: '40%',
              margin: 'auto',
              textAlign: 'center',
              paddingBottom: '150px',
            }}
          >
            <img
              style={{ margin: 'auto' }}
              height={150}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/11/down-arrow.png'
            />
          </div>
        </div>

        {/*mobile divs*/}
        {open ? (
          <div>
            <h1
              style={{
                fontSize: '55px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '0px',
                marginTop: '100px',
              }}
            >
              Practice A
            </h1>
            <h3
              style={{
                fontSize: '40px',
                fontWeight: '500',
                color: 'black',
                textAlign: 'center',
                marginTop: '0px',
              }}
            >
              RIA, North Carolina*
            </h3>
            <div
              className='third-home-div mobile-div practices'
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Group-196.png' />
            </div>
            <h1
              style={{
                fontSize: '55px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '0px',
                marginTop: '100px',
              }}
            >
              Practice B
            </h1>
            <h3
              style={{
                fontSize: '40px',
                fontWeight: '500',
                color: 'black',
                textAlign: 'center',
                marginTop: '0px',
              }}
            >
              RIA, Texas*
            </h3>
            <div
              className='third-home-div mobile-div practices'
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Group-198.png' />
            </div>
            <h1
              style={{
                fontSize: '55px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '0px',
                marginTop: '100px',
              }}
            >
              Practice C
            </h1>
            <h3
              style={{
                fontSize: '40px',
                fontWeight: '500',
                color: 'black',
                textAlign: 'center',
                marginTop: '0px',
              }}
            >
              Independent Advisor, Texas*
            </h3>
            <div
              className='third-home-div mobile-div practices'
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Group-199.png' />
            </div>
          </div>
        ) : (
          <div>
            <div
              className='third-home-div mobile-div practices'
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '100px',
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Group-117.png' />
            </div>
            <div
              className='third-home-div mobile-div practices'
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '100px',
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Group-124-1.png' />
            </div>
            <div
              className='third-home-div mobile-div practices'
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '100px',
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Group-125-2.png' />
            </div>
          </div>
        )}
        <div
          className='third-home-div finra-wrapper'
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10px',
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <h3 className='finra' style={{ color: 'black', fontSize: '20px' }}>
            *Results independently verified by Broker check and SEC. Practice
            details kept private to protect client confidentiality.
          </h3>
        </div>
        <div
          className='third-home-div index-testimonials'
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '100px',
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '-575px',
          }}
        >
          <h1
            style={{
              fontSize: '55px',
              color: 'black',
              textAlign: 'center',
              fontWeight: '800',
            }}
          >
            What our clients are saying
          </h1>
          <div
            className='third-home-div sec2'
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '75px',
              width: '45%',
              marginRight: 'auto',
              marginLeft: '20%',
            }}
          >
            <h2 style={{ fontSize: '32px', fontWeight: '400', color: 'black' }}>
              “Their insights have made us a more valuable firm.”
            </h2>
            <h5
              style={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black',
                marginTop: '0',
              }}
            >
              – Mikayla Raleigh, Raleigh Wealth Solutions
            </h5>
          </div>
          <div
            className='third-home-di sec2 test3'
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '75px',
              width: '45%',
              marginRight: '10%',
              marginLeft: 'auto',
            }}
          >
            <h2 style={{ fontSize: '32px', fontWeight: '400', color: 'black' }}>
              “An enormous positive impact on my practice.”
            </h2>
            <h5
              style={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black',
                marginTop: '0',
              }}
            >
              – Bryan Hamer, Accurate Advisory Group
            </h5>
          </div>
          <div
            className='third-home-div sec2 test4'
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '45px',
              width: '45%',
              marginRight: 'auto',
              marginLeft: '20%',
              marginBottom: '150px',
            }}
          >
            <h2
              className='sec2-h2'
              style={{
                fontSize: '32px',
                fontWeight: '400',
                color: 'black',
                position: 'relative',
                zIndex: '1',
              }}
            >
              “A real game changer.”
            </h2>
            <h5
              style={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black',
                marginTop: '0',
              }}
            >
              – Jonathan Howard, Accurate Advisory Group
            </h5>
          </div>
        </div>
        <div className='ellipse-15 mobile'>
          <img
            src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-15.png'
            alt='index-ellipse-2'
          />
        </div>
        <svg
          style={{ position: 'initial', zIndex: '0' }}
          className='home-ellipse hide-on-mobile'
          height='494'
          width='494'
        >
          <ellipse
            cx='-45'
            cy='250'
            rx='250'
            ry='250'
            style={{ fill: '#D0D7F5', height: '494px', width: '494px' }}
          />
        </svg>
        <svg
          className='last-ellipse'
          style={{ width: '100%', maxHeight: '537', marginBottom: '-500px' }}
          width='200'
          height='500'
          viewBox='0 0 596 1537'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse cx='3200' cy='770' rx='770' ry='770' fill='#D0D7F5' />
        </svg>

        <div
          style={{
            background: '#072AC6',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '250px',
            height: 'fit-content',
          }}
          className='millionaire index-bottom-div'
        >
          <div
            className='child-mill'
            style={{
              width: '35%',
              marginRight: 'auto',
              marginLeft: '10%',
              marginTop: '50px',
            }}
          >
            <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>
              Ready to learn more?
            </h1>
            <h3
              style={{
                fontSize: '30px',
                fontWeight: '500',
                paddingBottom: '10px',
              }}
            >
              Schedule a free 30 minute call
            </h3>
          </div>
          <iframe
            className='home-form'
            style={{ width: '80%', margin: 'auto', height: '1250px' }}
            src='https://go.pardot.com/l/986071/2022-11-17/m5jxdj'
            width='100%'
            height='1220'
            type='text/html'
            frameBorder='0'
            allowtransparency='true'
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
