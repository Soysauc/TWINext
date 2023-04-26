/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Layout from './components/layout';
// import SEOHead from "../components/head"
import Button from './components/ui.css';
// import Box from "@mui/material/Box"
import ReactPlayer from 'react-player';
// import { StaticImage } from "gatsby-plugin-image"

export default function Confirmation() {
  return (
    <>
      <Layout>
        <div className='education-wrapper'>
          <h1
            style={{
              color: 'black',
              fontSize: '72px',
              fontWeight: '700',
              marginBottom: '0',
            }}
          >
            Congratulations!
          </h1>
          <div className='heath-intro-video' style={{ marginTop: '50px' }}>
            <ReactPlayer
              volume={0}
              muted='true'
              playsinline='true'
              controls='true'
              playing='true'
              url='https://player.vimeo.com/video/787077938?h=1cbe16e450&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <h2 style={{ color: 'black', fontSize: '40px', fontWeight: '700' }}>
              Three things to do next:
            </h2>
            <ul
              style={{
                listStyle: 'none',
                color: 'black',
                marginBottom: '146px',
                maxWidth: '1225px',
                padding: '0 150px 0 200px',
              }}
            >
              <li>
                {' '}
                <div
                  style={{
                    // width: "25%",
                    marginRight: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '20px',
                  }}
                >
                  <div style={{ margin: '0' }}>
                    {' '}
                    {/* <StaticImage
                      src='../images/Ellipse 8.svg'
                      alt='circle'
                      style={{
                        width: '90px',
                        heigh: '90px',
                        position: 'relative',
                      }}
                    /> */}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      //   margin: "auto",
                      marginTop: '15px',
                      marginLeft: '25px',
                      //   width: "80%",
                    }}
                  >
                    {' '}
                    <p style={{ fontSize: '20px' }}>
                      Check your inbox <b>(and spam)</b> for an important
                      welcome email
                    </p>
                  </div>
                </div>
              </li>

              <li>
                {' '}
                <div
                  style={{
                    // width: "25%",
                    marginRight: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '20px',
                  }}
                >
                  <div style={{ margin: '0' }}>
                    {/* <StaticImage
                      src='../images/Ellipse 8.svg'
                      alt='circle'
                      style={{ width: '90px', heigh: '90px' }}
                    /> */}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      //   margin: "auto",
                      marginTop: '15px',
                      marginLeft: '25px',
                      //   width: "80%",
                    }}
                  >
                    {' '}
                    <p style={{ fontSize: '20px' }}>
                      Accept our email invite to add all six live sessions to
                      your calendar
                    </p>
                  </div>
                </div>
              </li>

              <li>
                {' '}
                <div
                  style={{
                    // width: "25%",
                    marginRight: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '20px',
                  }}
                >
                  <div style={{ margin: '0' }}>
                    {/* <StaticImage
                      src='../images/Ellipse 8.svg'
                      alt='circle'
                      style={{ width: '90px', heigh: '90px' }}
                    />{' '} */}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      //   margin: "auto",
                      marginTop: '5px',
                      marginLeft: '25px',
                      //   marginBottom: "140px",
                      //   width: "80%",
                    }}
                  >
                    {' '}
                    <p style={{ fontSize: '20px' }}>
                      Create your Learnworlds account and view the first session
                      prep materials (instructions are in the welcome email)
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            className='signup-sheet'
            id='signup-sheet'
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {/* <Box
              sx={{
                maxWidth: 300,
                margin: 'auto',
                marginTop: '25px',
                backgroundColor: 'white',
                // position: "absolute",
              }}
            ></Box> */}

            <div
              class='available-for-purchase'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: '67px',
                position: 'relative',
              }}
            >
              {/* Blue Circle */}
              <div
                style={{
                  position: 'absolute',
                  zIndex: '2',
                  alignSelf: 'flex-end',
                  top: '-278px',
                }}
                //   className="ellipse-50 summit-23"
              >
                <svg
                  width='248'
                  height='542'
                  viewBox='0 0 248 542'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <ellipse
                    cx='269.5'
                    cy='271'
                    rx='269.5'
                    ry='271'
                    fill='#D0D7F5'
                  />
                </svg>
              </div>
              {/* Blue Circle */}
              <h2
                style={{
                  color: 'white',
                  fontFamily: 'Gilroy',
                  lineHeight: '87px',
                  fontSize: '70px',
                  fontWeight: '900',
                  marginBottom: '0',
                }}
              >
                {' '}
                Have questions?
              </h2>
              <p
                style={{
                  color: 'white',
                  fontFamily: 'Gilroy',
                  lineHeight: '59px',
                  fontSize: '50px',
                  fontWeight: '500',
                  marginBottom: '0',
                }}
              >
                {' '}
                We're always here to help.
              </p>{' '}
              <Button
                className='roundtable-signup-new'
                to='/contact-us'
                style={{
                  marginTop: '42px',
                  color: '#072AC6 ',
                  fontSize: '38px',
                  fontWeight: '600',
                  paddingTop: '35px',
                  paddingLeft: '55px',
                  paddingRight: '55px',
                  height: '100px',
                  textDecoration: 'none',
                  maxWidth: '334px',
                  marginBottom: '110px',
                }}
              >
                {' '}
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// const Scripts = () => <meta name='JEREMY' content='JEREMY' />;

// export const Head = (props) => {
//   props.data.title = 'Confirmation | The Walters Institute';
//   props.data.description =
//     'Learn to master the tax and wealth protection strategies used by today’s top financial advisors to achieve 80% closure rates with HNW prospects';
//   const { homepage } = props.data;

//   return <SEOHead scripts={<Scripts />} {...props.data} />;
// };
