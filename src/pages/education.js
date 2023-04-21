/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Layout from './components/layout';
// import SEOHead from "../components/head"
// import { Button } from "../components/ui"
// import Box from "@mui/material/Box"
// import ReactPlayer from "react-player"

export default function Education() {
  const [rtdate] = React.useState('');

  return (
    <>
      <Layout>
        <div className='education-wrapper'>
          <h1 style={{ color: 'black' }}>
            Master the language of tax strategy and win more HNW clients.
          </h1>
          <div className='heath-intro-video'>
            {/* <ReactPlayer
              volume={0}
              muted="true"
              playsinline="true"
              controls="true"
              playing="true"
              url="https://player.vimeo.com/video/787077938?h=1cbe16e450&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            /> */}
          </div>
          <div className='roundtable-info'>
            <h1 style={{ color: 'white' }}>
              The 2023 Tax Strategy Masterclass
            </h1>
            <div>
              <h3>3 hours of video content + 6 live weekly sessions</h3>
            </div>
            <p> Here's what you'll get:</p>
            <p>
              •{' '}
              <span style={{ fontWeight: '700' }}>
                Twelve powerful strategies
              </span>{' '}
              that can reduce HNW tax liabilities an average of 48%
            </p>
            <p>
              • The <span style={{ fontWeight: '700' }}>five experts</span> you
              need on your team to execute efficiently and effectively
            </p>
            <p>
              • The secret to{' '}
              <span style={{ fontWeight: '700' }}>attracting and closing</span>{' '}
              wealthy prospects with an{' '}
              <span style={{ fontWeight: '700' }}>80%+ success rate</span> by
              proactively addressing their tax planning concerns
            </p>
            <p>
              • <span style={{ fontWeight: '700' }}>Lifetime access</span> to
              live session recordings
            </p>
          </div>

          <div className='signup-sheet' id='signup-sheet'>
            <div className='choose-your-start-date' id='choose-your-start-date'>
              <p>• Choose your start date •</p>
            </div>
            {/* <Box
              sx={{
                maxWidth: 300,
                margin: "auto",
                marginTop: "25px",
                backgroundColor: "white",
              }}
            ></Box> */}

            {
              {
                '': (
                  <div>
                    <div
                      className='bottom-register-button-wrapper'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '90%',
                        margin: 'auto',
                        marginTop: '40px',
                        marginBottom: '30px',
                        justifyContent: 'center',
                      }}
                    >
                      {/* <Button
                        className="roundtable-signup"
                        to="https://buy.stripe.com/5kA5nY96ogy6fRKbJa?prefilled_promo_code=MC500Promo"
                        style={{
                          backgroundColor: "#072AC6",
                          color: "#FFFFFF",
                          fontSize: "25px",
                          fontWeight: "500",
                          paddingLeft: "22px",
                          paddingRight: "22px",
                        }}
                      >
                        Tuesday, March 21 @ 11:00am EST
                      </Button> */}
                    </div>

                    <div
                      className='bottom-register-button-wrapper'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '90%',
                        margin: 'auto',
                        marginTop: '40px',
                        marginBottom: '30px',
                        justifyContent: 'center',
                      }}
                    >
                      {/* <Button
                        className='roundtable-signup2'
                        to='#roundtable-signup'
                        style={{
                          backgroundColor: '#072AC6',
                          color: '#FFFFFF',
                          fontSize: '25px',
                          fontWeight: '500',
                          paddingLeft: '22px',
                          paddingRight: '22px',
                          paddingTop: '25px',
                          paddingBottom: '25px',
                        }}
                      >
                        Wednesday, April 5 @ 9:30am EST
                      </Button> */}
                    </div>
                    <div
                      className='bottom-register-button-wrapper'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '90%',
                        margin: 'auto',
                        marginTop: '40px',
                        marginBottom: '30px',
                        justifyContent: 'center',
                      }}
                    >
                      {/* <Button
                        className="roundtable-signup3"
                        to="#roundtable-signup"
                        style={{
                          backgroundColor: "#072AC6",
                          color: "#FFFFFF",
                          fontSize: "25px",
                          fontWeight: "500",
                          paddingLeft: "17px",
                          paddingRight: "17px",
                          paddingTop: "25px",
                          paddingBottom: "25px",
                        }}
                      >
                        Wednesday, April 26 @ 11:00am EST
                      </Button> */}
                    </div>
                    <div
                      className='bottom-register-button-wrapper'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '90%',
                        margin: 'auto',
                        marginTop: '40px',
                        marginBottom: '30px',
                        justifyContent: 'center',
                      }}
                    >
                      {/* <Button
                        className='roundtable-signup4'
                        to='#roundtable-signup'
                        style={{
                          backgroundColor: '#072AC6',
                          color: '#FFFFFF',
                          fontSize: '25px',
                          fontWeight: '500',
                          paddingLeft: '50px',
                          paddingRight: '50px',
                          paddingTop: '25px',
                          paddingBottom: '25px',
                        }}
                      >
                        Tuesday, May 2 @ 9:30am EST
                      </Button> */}
                    </div>
                  </div>
                ),
                'Round Table #2 February 15th 11am': (
                  <div
                    className='bottom-register-button-wrapper'
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
                      className='roundtable-signup'
                      to='https://checkout.stripe.com/c/pay/cs_live_b1xsaPdF9Z2tQeYQkjDxFhEuJHTvLP3ltB8stwdTviSD2tMIHZ28vNTRSG#fidkdWxOYHwnPyd1blppbHNgWjA0SUkwU0ZPbkhuZEoxVEhdaWBDYTFxQm5pbFZ8RH9cXFBDYkxnYTFvTGAxMGNzaDRmaVVpakE8YmZKUmt%2FU0hSYzRucnNGYjRVZ31WNFNQN052TDZAZ39nNTU0Y0lXMk9XYycpJ3VpbGtuQH11anZgYUxhJz8nNz1qM3Y3ZGR2MFF2MmlgPERVJ3gl'
                      style={{
                        backgroundColor: '#072AC6',
                        color: '#FFFFFF',
                        fontSize: '25px',
                        fontWeight: '500',
                        paddingLeft: '40px',
                        paddingRight: '40px',
                      }}
                    >
                      Register now
                    </Button> */}
                  </div>
                ),
                'Round Table #3 February 28th 9:30am': (
                  <div
                    className='bottom-register-button-wrapper'
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
                      className='roundtable-signup'
                      to='https://checkout.stripe.com/c/pay/cs_live_b1z3MpUK5tw2KGQcUJadxA8PSDsSy8Sj9RPD84jRVm8M5YrKzHDgkc5fQE#fidkdWxOYHwnPyd1blppbHNgWjA0SUkwU0ZPbkhuZEoxVEhdaWBDYTFxQm5pbFZ8RH9cXFBDYkxnYTFvTGAxMGNzaDRmaVVpakE8YmZKUmt%2FU0hSYzRucnNGYjRVZ31WNFNQN052TDZAZ39nNTU0Y0lXMk9XYycpJ3VpbGtuQH11anZgYUxhJz8nNmZ2N2dIYnxUN01iYlNKNDFxJ3gl'
                      style={{
                        backgroundColor: '#072AC6',
                        color: '#FFFFFF',
                        fontSize: '25px',
                        fontWeight: '500',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                      }}
                    >
                      Register now
                    </Button> */}
                  </div>
                ),
              }[rtdate]
            }
            <div class='available-for-purchase'>
              <p>April and May classes will be available for purchase soon!</p>
            </div>
          </div>

          <div className='what-others-are-saying'>
            <h1>What Others Are Saying</h1>
            <div className='quote1'>
              <p className='quote'>"Heath has the keys to the kingdom."</p>
              <p className='author'>
                {' '}
                - Jonathan Howard, Accurate Wealth Management
              </p>
            </div>
            <div className='quote2'>
              <p className='quote'>
                "My CPA that works for me doesn't know 90% of the<br></br>
                tax strategies &#x5b;Heath&#93; is talking about"
              </p>
              <p className='author'>
                {' '}
                - Brian Bowen, Integrity Financial Planning
              </p>
            </div>
            <div className='quote3'>
              <p className='quote'>
                "The value that &#x5b;Heath&#93; can provide to a financial{' '}
                <br></br> advisor...I haven't seen it anywhere else."
              </p>
              <p className='author'>
                {' '}
                - Thomas Acerra, TJ Acerra and Associates
              </p>
            </div>
          </div>

          <div className='experts'>
            <h1 style={{ color: 'black' }}>The Experts</h1>
            <div className='experts-grid'>
              <div className='experts-grid-card'>
                <img
                  src='https://walterstaxstrategies.com/wp-content/uploads/2023/01/heath-vertex.png'
                  alt='heath-headshot'
                />
                <h3>Heath Walters, CPA</h3>
                <h5>The Walters Institute</h5>
              </div>
              <div className='experts-grid-card'>
                <img
                  src='https://walterstaxstrategies.com/wp-content/uploads/2023/01/gus-vertex.png'
                  alt='heath-headshot'
                />
                <h3>Gus Gotsis, President</h3>
                <h5>Accurate Advisory Group</h5>
              </div>
              <div className='experts-grid-card'>
                <img
                  src='https://walterstaxstrategies.com/wp-content/uploads/2023/01/rob-vertex.png'
                  alt='heath-headshot'
                />
                <h3>Robert Leone, CTFA</h3>
                <h5>Accurate Advisory Group</h5>
              </div>
              <div className='experts-grid-card'>
                <img
                  src='https://walterstaxstrategies.com/wp-content/uploads/2023/01/Untitled-3.png'
                  alt='heath-headshot'
                />
                <h3>Daniel Goodwin, Founder</h3>
                <h5>Provident1031.com</h5>
              </div>
            </div>
            <div className='experts-grid-card'>
              <img
                src='https://walterstaxstrategies.com/wp-content/uploads/2023/01/matt-vertex.png'
                alt='heath-headshot'
              />
              <h3>Matt Leonard, CPA</h3>
              <h5>Leonard & Leonard CPAs</h5>
            </div>
          </div>
          <div className='topics'>
            <h1 style={{ color: 'black' }}>The Topics</h1>
            <div className='topics-grid'>
              <div className='education-sessions'>
                <h3>Week 1</h3>
                <h5>Intro to Tax Planning & the Family Office Model</h5>
                <p>• What HNW clients expect from their financial advisor</p>
                <p>• The five people you need on your team</p>
                <p>• The power of depreciation and cost segregation</p>
              </div>
              <div className='education-sessions'>
                <h3>Week 2</h3>
                <h5>Opportunity Zones & 1031 Exchanges</h5>
                <p>• Tapping into passive and active mechanisms</p>
                <p>• How to leverage Delaware Statutory Trusts</p>
                <p>• The importance of Qualified Intermediaries</p>
              </div>
              <div className='education-sessions'>
                <h3>Week 3</h3>
                <h5>Charitable Planning</h5>
                <p>• How Defined Benefit Plans improve retirement</p>
                <p>• Why Donor Advised Funds are a powerful tool</p>
                <p>• How Defined Benefit Plans improve retirement</p>
              </div>
              <div className='education-sessions'>
                <h3>Week 4</h3>
                <h5>Tax Efficient Investing</h5>
                <p>• What HNW clients expect from their financial advisor</p>
                <p>• The five people you need on your team</p>
                <p>• The power of depreciation and cost segregation</p>
              </div>
              <div className='education-sessions'>
                <h3>Week 5</h3>
                <h5>Estate Planning</h5>
                <p>• Why Section 706 portability is important</p>
                <p>• How to leverage Deferred Sales Trusts</p>
              </div>
              <div className='education-sessions'>
                <h3>Week 6</h3>
                <h5>Putting It All Together</h5>
                <p>• How to expand your team with the right skill sets</p>
                <p>• The most effective marketing for the HNW demographic</p>
                <p>• Becoming hyper-referable in your COI</p>
              </div>
            </div>
          </div>
          <div className='bottom-grid'>
            <div
              className='right-column'
              style={{
                position: 'relative',
                marginRight: '-160px',
                zIndex: '0s',
              }}
            >
              <img
                style={{ marginBottom: '-5px' }}
                alt='heath'
                src='https://walterstaxstrategies.com/wp-content/uploads/2023/01/Heath-new-blue-shirt-smiling-1.png'
              />
            </div>
            <div className='left-column'>
              <div
                style={{
                  width: '80%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: '1',
                }}
              >
                <h3 style={{ color: 'black' }}>
                  Are you ready to make 2023 <br></br> your best year yet?
                </h3>
                <p style={{ color: 'black', fontSize: '25px' }}>
                  Seats are limited to 10 per course, so reserve your spot
                  today!
                </p>
                {/* <div className= "choose-your-start-date2" id ="choose-your-start-date2">
          <p>• Choose your start date •</p>
        </div> */}
                <div className='signup-wrapper'>
                  {/* <Box
                    sx={{
                      maxWidth: 300,
                      margin: 'auto',
                      marginTop: '25px',
                      backgroundColor: 'white',
                    }}
                  ></Box> */}

                  {
                    {
                      '': (
                        <div>
                          <div
                            className='bottom-register-button-wrapper'
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              width: '90%',
                              justifyContent: 'center',
                            }}
                          >
                            {/* <Button className="bottom-register-button" to="https://buy.stripe.com/28o6s2aas5Ts7le9AP" style={{backgroundColor: "#072AC6", color: "#FFFFFF", fontSize: "25px", fontWeight: "500", paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px", paddingBottom:"25px" }}>Wednesday, Feb. 15 @ 11:00am EST</Button> */}
                          </div>
                          {/* <div className="bottom-register-button-wrapper" style={{display: "flex", flexDirection: "row", width: "90%", margin: "auto", marginTop: "40px", marginBottom: "50px", justifyContent: "center"}}>
                                                                            <Button className="bottom-register-button2" to="https://buy.stripe.com/3cs2bMgyQ2HggVO14t?prefilled_promo_code=MC500Promo" style={{backgroundColor: "#072AC6", color: "#FFFFFF", fontSize: "25px", fontWeight: "500", paddingLeft: "40px", paddingRight: "40px", paddingTop: "20px", paddingBottom:"25px"}}>Tuesday, Feb. 28 @ 9:30am EST</Button>
                                                                          </div>  */}
                        </div>
                      ),
                      'Round Table #2 February 15th 11am': (
                        <div
                          className='bottom-register-button-wrapper'
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
                            className='bottom-register-button'
                            to='https://checkout.stripe.com/c/pay/cs_live_b1xsaPdF9Z2tQeYQkjDxFhEuJHTvLP3ltB8stwdTviSD2tMIHZ28vNTRSG#fidkdWxOYHwnPyd1blppbHNgWjA0SUkwU0ZPbkhuZEoxVEhdaWBDYTFxQm5pbFZ8RH9cXFBDYkxnYTFvTGAxMGNzaDRmaVVpakE8YmZKUmt%2FU0hSYzRucnNGYjRVZ31WNFNQN052TDZAZ39nNTU0Y0lXMk9XYycpJ3VpbGtuQH11anZgYUxhJz8nNz1qM3Y3ZGR2MFF2MmlgPERVJ3gl'
                            style={{
                              backgroundColor: '#072AC6',
                              color: '#FFFFFF',
                              fontSize: '25px',
                              fontWeight: '500',
                              paddingLeft: '40px',
                              paddingRight: '40px',
                            }}
                          >
                            Register now
                          </Button> */}
                        </div>
                      ),
                      'Round Table #3 February 28th 9:30am': (
                        <div
                          className='bottom-register-button-wrapper'
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
                            className='bottom-register-button'
                            to='https://checkout.stripe.com/c/pay/cs_live_b1z3MpUK5tw2KGQcUJadxA8PSDsSy8Sj9RPD84jRVm8M5YrKzHDgkc5fQE#fidkdWxOYHwnPyd1blppbHNgWjA0SUkwU0ZPbkhuZEoxVEhdaWBDYTFxQm5pbFZ8RH9cXFBDYkxnYTFvTGAxMGNzaDRmaVVpakE8YmZKUmt%2FU0hSYzRucnNGYjRVZ31WNFNQN052TDZAZ39nNTU0Y0lXMk9XYycpJ3VpbGtuQH11anZgYUxhJz8nNmZ2N2dIYnxUN01iYlNKNDFxJ3gl'
                            style={{
                              backgroundColor: '#072AC6',
                              color: '#FFFFFF',
                              fontSize: '25px',
                              fontWeight: '500',
                              paddingLeft: '40px',
                              paddingRight: '40px',
                            }}
                          >
                            Register now
                          </Button> */}
                        </div>
                      ),
                    }[rtdate]
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-rectangle'></div>
      </Layout>
    </>
  );
}

// export const Head = (props) => {
//   props.data.title = 'Education | The Walters Institute';
//   props.data.description =
//     'Learn to master the tax and wealth protection strategies used by today’s top financial advisors to achieve 80% closure rates with HNW prospects';
//   const { homepage } = props.data;

//   return <SEOHead {...props.data} />;
// };
