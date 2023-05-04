import React from 'react';
import Layout from '@/components/layout';

import Image from 'next/image';
import Link from 'next/link';
// import SEOHead from "../components/head"

export default function WhoWeAre() {
  return (
    <Layout>
      <div className='wrapper' style={{ width: '100%', overflow: 'hidden' }}>
        <div
          className='carousel'
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: '5',
            overflow: 'hidden',
            height: '100vh',
          }}
        >
          <div
            className='carousel-words'
            style={{
              width: '80%',
              marginTop: '100px',
              marginLeft: '5%',
              marginRight: 'auto',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                color: 'black',
                position: 'relative',
                zIndex: '1',
              }}
            >
              Who We Are
            </h1>
            <h3
              style={{
                fontSize: '30px',
                fontWeight: '500',
                color: 'black',
                marginBottom: '80px',
                position: 'relative',
                zIndex: '1',
              }}
            >
              We’re a group of professional tax planners who are passionate
              about the power of tax strategy to move wealth advisory firms
              upmarket.
            </h3>
          </div>
          <div
            className='image-container'
            style={{
              width: '100%',
              textAlign: 'end',
              position: 'relative',
              zIndex: '1',
              marginTop: 'auto',
            }}
          >
            <img
              className='carousel-image'
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/heath-nobackground1.png'
            />
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 3,
          background: '#072AC6',
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '0',
        }}
        className='millionaire wwa'
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: '40%',
            textAlign: 'left',
            width: '80%',
          }}
        >
          <h1 style={{ fontSize: '60px', marginBottom: '0' }}>Our Mission</h1>
          <h3
            style={{ fontSize: '25px', fontWeight: '400', marginTop: '10px' }}
          >
            What gets us up in the morning.
          </h3>
          <h3
            style={{ fontSize: '30px', fontWeight: '400', marginTop: '45px' }}
          >
            Helping financial advisors build a practice they love by winning
            more high-value clients through strategic tax planning.
          </h3>
        </div>
      </div>
      <div className='wwa-ellipse-48'>
        <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-48-1-1.png' />
      </div>
      <div
        className='third-home-div'
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: 'black',
          width: '80%',
          margin: 'auto',
        }}
      >
        <div className='values' style={{ width: '40%', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '60px', marginBottom: '0' }}>
            Our Core Values
          </h1>
          <h3
            style={{ fontSize: '25px', fontWeight: '500', marginTop: '10px' }}
          >
            What keeps us on track.
          </h3>
        </div>
        <div
          className='values-1'
          style={{
            width: '60%',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '80px',
          }}
        >
          <div className='icon-wrapper'>
            <Image
              width={179}
              height={179}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/award.png'
              alt='award'
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              marginLeft: '25px',
              width: '80%',
            }}
          >
            <h1
              style={{ fontSize: '50px', marginBottom: '0', fontWeight: '600' }}
            >
              Service
            </h1>
            <h3
              style={{ fontSize: '25px', fontWeight: '500', marginTop: '10px' }}
            >
              We go the extra mile to help you win the trust of HNW prospects.
            </h3>
          </div>
        </div>
        <div
          className='values-2'
          style={{
            width: '60%',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '80px',
          }}
        >
          <div className='icon-wrapper'>
            <Image
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/target.png'
              alt='target'
              width={179}
              height={179}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              marginLeft: '25px',
              width: '80%',
            }}
          >
            <h1
              style={{ fontSize: '50px', marginBottom: '0', fontWeight: '600' }}
            >
              Guidance
            </h1>
            <h3
              style={{ fontSize: '25px', fontWeight: '500', marginTop: '10px' }}
            >
              We equip you to speak confidently about sophisticated tax
              strategies year-round.
            </h3>
          </div>
        </div>
        <div
          className='values-3'
          style={{
            width: '60%',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '80px',
          }}
        >
          <div className='icon-wrapper'>
            <Image
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/certificate.png'
              alt='ribbon'
              width={179}
              height={179}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              marginLeft: '25px',
              width: '80%',
            }}
          >
            <h1
              style={{ fontSize: '50px', marginBottom: '0', fontWeight: '600' }}
            >
              Expertise
            </h1>
            <h3
              style={{ fontSize: '25px', fontWeight: '500', marginTop: '10px' }}
            >
              We stay ahead of regulatory changes and deliver defensible tax
              plans that maximize your clients’ savings.
            </h3>
          </div>
        </div>
      </div>

      <svg
        className='cv-ellip-1'
        width='285'
        height='1055'
        viewBox='0 0 285 1355'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='-387.5' cy='677.5' rx='572.5' ry='577.5' fill='#D0D7F5' />
      </svg>

      <div style={{ marginTop: '-190px' }}>
        <h1
          style={{
            fontSize: '60px',
            color: 'black',
            textAlign: 'center',
            marginBottom: '0px',
          }}
        >
          Meet the Team
        </h1>
        <h3
          style={{
            fontSize: '25px',
            fontWeight: '500',
            textAlign: 'center',
            marginTop: '0px',
            color: 'black',
          }}
        >
          We&#39;re family here.
        </h3>
        <svg
          className='cv-ellip-2'
          width='100%'
          height='342'
          viewBox='0 0 369 742'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse cx='1868.5' cy='371' rx='368.5' ry='371' fill='#D0D7F5' />
        </svg>
      </div>
      <div
        className='people-card first'
        style={{
          width: '70%',
          marginTop: '-35px',
          marginRight: 'auto',
          marginLeft: '10%',
          borderRadius: '20%',
        }}
      >
        <div className='biocard-1'>
          <div className='icon-container' style={{}}>
            <img
              style={{ padding: '20px', maxHeight: '12.25rem' }}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/heath-circle-ellipse.png'
              alt='heath-circle-ellipse'
            />
          </div>
          <h3
            className='heath-bio-title'
            style={{
              fontSize: '30px',
              fontWeight: '600',
              marginTop: 'auto',
              color: 'black',
              width: '60%',
            }}
          >
            Heath Walters, CPA, CTC{' '}
            <a href='https://www.linkedin.com/in/heathwalters/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
          </h3>
        </div>
        <div className='biocard-2'>
          <h3 style={{ width: '90%', color: 'black', fontWeight: '500' }}>
            With over a decade of strategic tax planning for HNW families, Heath
            is a leading authority on growing wealth management practices
            through tax mitigation.<br></br>
            <br></br>
            When he’s not busy helping his clients double and even triple their
            revenues, you’ll find him fishing, grilling, and tackling home
            renovation projects.
          </h3>
        </div>
      </div>
      <svg
        style={{ marginBottom: '-500px' }}
        width='229'
        height='585'
        viewBox='0 0 229 585'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='-61.5' cy='292.5' rx='190.5' ry='192.5' fill='#D0D7F5' />
      </svg>

      <div
        className='people-card'
        style={{
          width: '70%',
          marginTop: '80px',
          marginLeft: 'auto',
          borderRadius: '20%',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <div className='biocard-1'>
          <h3
            className='jake-bio-title'
            style={{
              fontSize: '30px',
              fontWeight: '600',
              marginTop: 'auto',
              color: 'black',
              width: '50%',
              textAlign: 'center',
            }}
          >
            Jake Meier, CPA{' '}
            <a href='https://www.linkedin.com/in/jake-meier-0314a619/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
          </h3>
          <div className='icon-container' style={{}}>
            <img
              style={{ padding: '20px', maxHeight: '12.25rem' }}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/jake-circle-ellipse.png'
              alt='jake-circle-ellipse'
            />
          </div>
        </div>
        <div className='biocard-2'>
          <h3 style={{ width: '90%', color: 'black', fontWeight: '500' }}>
            A veteran of corporate and personal tax compliance, Jake works with
            wealthy clients of financial advisors to apply advanced tax
            strategies to their portfolios.
            <br></br>
            <br></br>
            Despite his busy schedule, he’s an avid golfer and concert-goer and
            loves spending time with his wife, Sara, and their furry kids,
            Maggie and Nora.
          </h3>
        </div>
      </div>
      <div
        className='people-card'
        style={{
          width: '70%',
          marginTop: '180px',
          marginRight: 'auto',
          marginLeft: '10%',
          borderRadius: '20%',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <div className='biocard-1'>
          <div className='icon-container' style={{}}>
            <img
              style={{ padding: '20px', maxHeight: '12.25rem' }}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/guy-circle-ellipse.png'
              alt='guy-circle-headshot'
            />
          </div>
          <h3
            className='guy-bio-title'
            style={{
              fontSize: '30px',
              fontWeight: '600',
              marginTop: 'auto',
              color: 'black',
              width: '50%',
            }}
          >
            Guy Woodliff, MSA{' '}
            <a href='https://www.linkedin.com/in/e-guy-woodliff-29341311b/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
          </h3>
        </div>
        <div className='biocard-2'>
          <h3 style={{ width: '90%', color: 'black', fontWeight: '500' }}>
            Edgar Guy Woodliff completed undergraduate studies at Guilford
            University, majoring in Accounting and Business. After graduation,
            he went on to The University of North Carolina at Charlotte to
            obtain his Master’s in Accounting.<br></br>
            <br></br>
            Guy, as he prefers to be called, started his career as a tax
            preparer at Wheeler & Associates, before moving on to strategic tax
            planning at The Walters Way. Guy lives in Charlotte, North Carolina
            with his wife Mary and his daughter Margaret. In his spare time, Guy
            loves to fish, golf, and spend time with his family.
          </h3>
        </div>
      </div>
      <svg
        style={{
          width: '100%',
          marginTop: '-300px',
          position: 'relative',
          zIndex: '0',
        }}
        width='785'
        height='893'
        viewBox='0 0 785 893'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse
          style={{}}
          cx='893.5'
          cy='446.5'
          rx='343.5'
          ry='346.5'
          fill='#D0D7F5'
        />
      </svg>
      <div
        className='people-card'
        style={{
          width: '70%',
          marginTop: '-400px',
          marginLeft: 'auto',
          borderRadius: '20%',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <div className='biocard-1'>
          <h3
            className='jorge-bio-title'
            style={{
              fontSize: '30px',
              fontWeight: '600',
              marginTop: 'auto',
              color: 'black',
              width: '50%',
              textAlign: 'center',
            }}
          >
            Jorge Aponte, MBA{' '}
            <a href='https://www.linkedin.com/in/jorge-aponte-mba-32b51a4b/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
            <br></br>
            <p
              style={{
                fontSize: '20px',
                color: 'black',
                fontWeight: '500',
                margin: '0',
                textAlign: 'center',
                marginTop: '0px',
              }}
            >
              COO
            </p>
          </h3>

          <div className='icon-container' style={{}}>
            <img
              style={{ padding: '20px', maxHeight: '12.25rem' }}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/jorge-circle-ellipse.png'
              alt='jorge-circle-headshot'
            />
          </div>
        </div>
        <div className='biocard-2'>
          <h3 style={{ width: '90%', color: 'black', fontWeight: '500' }}>
            Jorge Aponte is a performance-driven leader who loves business
            operations, strategies, and supply chain management.<br></br>
            <br></br>A voracious learner, Jorge is a talented executive who
            enjoys developing people, processes, and procedures so that
            organizations sustain success.
          </h3>
        </div>
      </div>
      <div
        className='people-card'
        style={{
          width: '70%',
          marginTop: '180px',
          marginRight: 'auto',
          marginLeft: '10%',
          borderRadius: '20%',
          position: 'relative',
          zIndex: '3',
        }}
      >
        <div className='biocard-1'>
          <div className='icon-container' style={{}}>
            <img
              style={{ padding: '20px', maxHeight: '12.25rem' }}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/liz-ellipse-circle.png'
              alt='liz-ellipse-headshot'
            />
          </div>
          <div
            className='liz-bio-title'
            style={{
              fontSize: '30px',
              fontWeight: '600',
              marginTop: '75px',
              color: 'black',
              width: '50%',
            }}
          >
            Lizbeth Rios{' '}
            <a href='www.linkedin.com/in/lizbeth-rios-7646225a'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
            <br></br>
            <h4
              style={{
                fontSize: '20px',
                color: 'black',
                fontWeight: '500',
                margin: '0',
                textAlign: 'left',
              }}
            >
              Executive Assistant
            </h4>
          </div>
        </div>
        <div className='biocard-2'>
          <h3 style={{ width: '90%', color: 'black', fontWeight: '500' }}>
            With over 25 years of administrative experience in healthcare,
            governmental, and non-profit organizations, Liz is a highly skilled
            project and office manager.<br></br>
            <br></br>
            When she’s not keeping order at TWI HQ, she’s tackling home
            projects, shopping for great deals, and making memories with friends
            and family.{' '}
          </h3>
        </div>
      </div>
      {/* <svg style={{marginTop: "-300px", maxWidth: "338px"}}  viewBox="0 0 338 914" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="-76" cy="457" rx="254" ry="257" fill="#D0D7F5"/>
                </svg> */}
      <div
        className='people-card'
        style={{
          width: '70%',
          marginTop: '-150px',
          marginLeft: 'auto',
          borderRadius: '20%',
          position: 'relative',
          zIndex: '3',
        }}
      ></div>
      <div className='wwa-bottom-ellipse-43' style={{ display: 'none' }}>
        <img src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-43-1.png' />
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
        className='millionaire wwa-bottom-wrapper'
      >
        <div
          className='wwa-bottom-div'
          style={{
            width: '55%',
            marginRight: 'auto',
            marginLeft: '10%',
            marginTop: '50px',
          }}
        >
          <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>
            Want to learn more?
          </h1>
          <h3
            style={{
              fontSize: '30px',
              fontWeight: '500',
              paddingBottom: '50px',
            }}
          >
            One of us will get back to your shortly
          </h3>
          <Link
            className='wwd-contact-button wwa'
            href='/contact-us'
            style={{
              backgroundColor: 'white',
              color: '#072AC6',
              fontSize: '20px',
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
    </Layout>
  );
}

// export const Head = (props) => {
//     props.data.title = "Who We Are | The Walters Institute";
//     props.data.description = "Our team of professional tax planners are dedicated to helping financial advisors build a successful practice through strategic tax planning. We offer expertise, guidance, and innovative solutions to help you win high-value clients and maximize their savings."
//     const { homepage } = props.data

//     return <SEOHead {...props.data} />
//   }
