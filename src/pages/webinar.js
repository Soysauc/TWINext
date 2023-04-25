/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Layout from './components/layout';
// import { Button } from "../components/ui.js"
// import "./styles/summit-23.css"
// import SEOHead from "../components/head"
// import { Link } from "../components/ui.js"

export default function Webinar23() {
  const css = `
    .banner {
        display: none !important;
    }
    `;
  return (
    <Layout>
      <style>{css}</style>
      <div
        className='summit-header webinar-header '
        style={{ marginTop: '50px' }}
      >
        <div className='summit-wrapper'>
          <h1 style={{ fontWeight: '800', fontSize: '100px' }}>
            How to Win Your First
          </h1>
          <h3
            style={{
              fontWeight: '800',
              fontSize: '100px',
              marginBottom: '25px',
            }}
          >
            HNW Client
          </h3>
          <div className='webinar-box'>
            <h5 style={{ fontWeight: '600', marginTop: '15px' }}>
              Live Webinar
              <p style={{ marginTop: '0' }}>April 27 @ 2:00pm EST</p>
            </h5>
          </div>
        </div>
      </div>
      <section style={{ display: 'flex' }}>
        <div style={{ margin: '0 auto' }}>
          <div
            style={{
              margin: '93px 25px',
              width: '460px',
              height: '460px',
              backgroundColor: '#fbc300',
              borderRadius: '50%',
            }}
          >
            <img
              style={{
                margin: '60px 10px 10px 100px',
                height: '400px',
                borderRadius: '44%',
              }}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/12/heath-nobackground1.png'
            />
          </div>
        </div>
        <div
          className='summit-sec1'
          style={{
            marginTop: '163px',
            marginLeft: '90px',
            marginBottom: '115px',
          }}
        >
          <h1>Hi, I'm Heath Walters.</h1>
          <p
            className='summit-sec-1-p'
            style={{ color: 'black', fontSize: '30px', marginBottom: '0' }}
          >
            I've spent over a decade in the HNW tax planning space and saved
            clients over $30 million in liabilities.
          </p>
          <p
            className='summit-sec-1-p'
            style={{ color: 'black', fontSize: '30px' }}
          >
            Now I'm sharing my knowledge and helping wealth advisors achieve
            <span style={{ fontWeight: '800' }}>
              {' '}
              80%+ cloosure rates with wealthy prospects
            </span>{' '}
            by teaching them how to master the language of tax strategy .{' '}
          </p>
        </div>
      </section>

      <div className='summit-highlights' style={{ margin: '0 0 0 150px' }}>
        <h1 style={{ marginRight: '145px' }}>The Highlights</h1>
        <div className='summit-highlights-body'>
          <p>In this webinar, you’ll learn:</p>
          <p>
            ● <b>Five key arenas </b>for tax mitigation that can reduce HNW
            liabilities an average of 48%
          </p>
          <p>
            ● <b>How to build credibility </b> with wealthy individuals by
            speaking to their unique tax planning needs and expectations
          </p>
          <p>
            ● <b>The five experts </b> you need on your team to execute
            successfully for your clients
          </p>
          <p>
            ● <b>Open Q&A </b> where you can ask me anything about working with
            the HNW market
          </p>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <svg
          width='285'
          height='577'
          viewBox='0 0 285 577'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse cx='-5.5' cy='288.5' rx='290.5' ry='288.5' fill='#FFF3CA' />
        </svg>

        <div
          style={{
            width: '619px',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '80px',
          }}
        >
          <h2 style={{ fontSize: '41px', color: 'black', marginTop: '116px' }}>
            Are you ready to start attracting wealthier prospects in 2023?
          </h2>
          <p style={{ fontSize: '31px', color: 'black', marginBottom: '46px' }}>
            Don't miss this webinar!
          </p>
          {/* <button
            className='get-in-touch'
            to=''
            style={{
              backgroundColor: '#072AC6',
              color: 'white',
              borderRadius: '50px',
              fontSize: '25px',
              fontWeight: '600',
              paddingLeft: '60px',
              paddingRight: '60px',
              paddingTop: '30px',
              paddingBottom: '30px',
            }}
          >
            Register Now
          </button> */}
        </div>

        <svg
          width='286'
          height='577'
          viewBox='0 0 286 577'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse cx='290.5' cy='288.5' rx='290.5' ry='288.5' fill='#FFF3CA' />
        </svg>
      </div>

      <div
        style={{
          borderTop: '7px solid #072AC6',
          marginTop: '208px',
          marginBottom: '132px',
        }}
      ></div>
    </Layout>
  );
}

// export const Head = (props) => {
//   props.data.title = 'The Webinar March 14th | The Walters Institute';
//   props.data.description =
//     "At the webinar, you'll learn powerful strategies for tax mitigation, how to build credibility with wealthy individuals, and the shortest path to mastering skills that make you invaluable to high-net-worth clients";
//   const { homepage } = props.data;

//   return <SEOHead {...props.data} />;
// };
