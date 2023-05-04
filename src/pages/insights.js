import * as React from 'react';
import Layout from '@/components/layout';
// import SEOHead from "../components/head"

export default function insights() {
  return (
    <Layout>
      <svg
        style={{ maxHeight: '1226', width: '100%', marginTop: '75px' }}
        height='1226'
        viewBox='0 0 725 1226'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='-500' cy='613' rx='359' ry='363' fill='#D0D7F5' />
      </svg>
      <div
        className='insights-header'
        style={{ textAlign: 'center', marginTop: '-1350px' }}
      >
        <h1
          className='insights-h1'
          style={{
            fontSize: '60px',
            color: 'black',
            textAlign: 'center',
            marginTop: '125px',
            position: 'relative',
            zIndex: '1',
          }}
        >
          Stay in the know.
        </h1>
        <h3
          style={{
            fontSize: '30px',
            fontWeight: '500',
            color: 'black',
            marginBottom: '80px',
            width: '50%',
            margin: 'auto',
          }}
        >
          Top-notch info on the financial industry and tax landscape in America.
        </h3>
      </div>
      <div
        className='insights-container'
        style={{
          width: '90%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ width: '35%', margin: 'auto' }}>
          <h1
            style={{
              fontSize: '40px',
              color: 'black',
              textAlign: 'left',
              marginTop: '125px',
              position: 'relative',
              zIndex: '1',
            }}
          >
            Blogs
          </h1>
          <div className='webinar-hover' style={{ maxHeight: '700px' }}>
            {/* <a href='/blogs'> */}
            <img
              style={{
                width: '100%',
                borderRadius: '20px',
                boxShadow: '-5px 5px 5px rgba(0, 0, 0, 0.25)',
              }}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/11/pensive-man.png'
              alt='pensive-man'
            />
            {/* </a> */}
          </div>
        </div>
        <div style={{ marginBottom: '150px', width: '35%', margin: 'auto' }}>
          <h1
            style={{
              fontSize: '40px',
              color: 'black',
              textAlign: 'left',
              marginTop: '125px',
              position: 'relative',
              zIndex: '1',
            }}
          >
            Webinars
          </h1>
          <div className='webinar-hover' style={{ maxHeight: '700px' }}>
            <img
              style={{
                width: '100%',
                borderRadius: '20px',
                boxShadow: '-5px 5px 5px rgba(0, 0, 0, 0.25)',
              }}
              src='https://walterstaxstrategies.com/wp-content/uploads/2022/11/man-studying-copy.png'
              alt='website design work table'
            />
          </div>
        </div>
      </div>
      <div style={{ width: '80%', margin: 'auto' }}>
        <iframe
          id='iframe1'
          style={{ marginTop: '120px', borderRadius: '25px' }}
          width='100%'
          height='180px'
          src='//percolate.blogtalkradio.com/offsiteplayer?hostId=362063&episodeId=12179882'
          allowFullScreen
        ></iframe>
        <iframe
          style={{ borderRadius: '25px' }}
          width='100%'
          height='180px'
          src='//percolate.blogtalkradio.com/offsiteplayer?hostId=362063&episodeId=12179883'
          allowFullScreen
        ></iframe>
      </div>

      <div
        style={{
          background: '#072AC6',
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '820px',
          marginTop: '200px',
        }}
        className='millionaire wwd insights'
      >
        <div
          style={{
            width: '75%',
            marginRight: 'auto',
            marginLeft: '10%',
            marginTop: 'auto',
            marginBottom: 'auto',
            height: '90%',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              lineHeight: '65px',
              marginBottom: '20px',
            }}
          >
            Great info straight to your inbox.
          </h1>
          <h3
            style={{
              fontSize: '45px',
              fontWeight: '400',
              paddingBottom: '50px',
            }}
          >
            Sign up for our newsletter
          </h3>
          <iframe
            style={{ height: '500px', border: 'none' }}
            src='https://go.pardot.com/l/986071/2022-12-09/m5mnq1'
            width='100%'
            type='text/html'
            allowtransparency='true'
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

// export const Head = (props) => {
//   props.data.title = "Insights | The Walters Institute"
//   props.data.description =
//     "Top-notch info on the financial industry and tax landscape in America."
//   const { homepage } = props.data
//   return <SEOHead {...props.data} />
// }
