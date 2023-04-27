/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Layout from "../components/layout"
import { Button } from "../components/ui.js"
import "./styles/summit-23.css"
import SEOHead from "../components/head"
import { Link } from "../components/ui.js"

export default function Summit23() {
  const css = `
    .banner {
        display: none !important;
    }
    `
  return (
    <Layout>
      <style>{css}</style>
      <div className="summit-header " style={{ marginTop: "50px" }}>
        <div className="summit-wrapper">
          <h1>The Financial Innovation Summit</h1>
          <h3>Jan. 9-10, 2023</h3>
          <h5>Tampa, FL</h5>
          <Button
            className="get-in-touch"
            to="https://go.heathwalters.com/l/986071/2022-08-23/m5156v"
            style={{
              backgroundColor: "#072AC6",
              color: "white",
              fontSize: "25px",
              fontWeight: "600",
              paddingLeft: "60px",
              paddingRight: "60px",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            Register Now
          </Button>
        </div>
      </div>
      <div className="ellipse-48 summit-23">
        <img
          src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-48.png"
          alt="ellipse-48"
        />
      </div>
      <div className="summit-sec1">
        <h1>What's it all about?</h1>
        <p
          className="summit-sec-1-p"
          style={{ color: "black", fontSize: "30px", marginBottom: "100px" }}
        >
          Learn to master the tax and wealth protection strategies used by
          today’s top financial advisors to{" "}
          <span style={{ fontWeight: "800" }}>
            achieve 80% closure rates with HNW prospects.
          </span>
        </p>
        <p
          className="summit-sec-1-p"
          style={{ color: "black", fontSize: "30px" }}
        >
          And if that’s not compelling enough, we’re hosting the entire
          conference{" "}
          <span style={{ fontWeight: "800" }}>
            at one of Tampa Bay’s top craft breweries.
          </span>{" "}
          Who said tax education can't be fun?
        </p>
      </div>
      <div className="summit-sec2">
        <div className="day1 first">
          <h1
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              paddingBottom: "50px",
              paddingTop: "50px",
            }}
          >
            Day 01
          </h1>
          <div style={{ paddingLeft: "50px", width: "70%" }}>
            <h2>Sessions • Noon - 5:00pm</h2>
            <h2>Mix & Mingle • 5:00pm - 8:00pm</h2>
          </div>
        </div>
        <div
          style={{ marginTop: "20px", marginTop: "50px" }}
          className="day1 second"
        >
          <h1
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              paddingBottom: "50px",
              paddingTop: "50px",
            }}
          >
            Day 02
          </h1>

          <div style={{ paddingLeft: "50px", width: "70%" }}>
            <h2>Sessions • 9:00am - noon</h2>
          </div>
        </div>
      </div>
      <div className="ellipse-49 summit-23">
        <img
          src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-49.png"
          alt="ellipse-49"
        />
      </div>

      <div style={{ display: "none" }} className="ellipse-50 summit-23">
        <img
          src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/Ellipse-49-2.png"
          alt="ellipse-49"
        />
      </div>
      <div className="summit-highlights">
        <h1>The Highlights</h1>
        <div className="summit-highlights-body">
          <p>At the Summit, you’ll learn:</p>
          <p>
            ● Powerful strategies for tax mitigation that can reduce HNW
            liabilities an average of 48%
          </p>
          <p>
            ● How to build credibility with wealthy individuals by speaking to
            their unique needs and expectations
          </p>
          <p>
            ● The shortest path to mastering the skills that make you invaluable
            to a high-net-worth client
          </p>
        </div>
      </div>
      <div className="lineup">
        <h1>The Lineup</h1>
        <div className="lineup-pic-right">
          <div className="lineup-pic-right-img">
            <img
              src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/heath-circle-ellipse.png"
              alt="heath-circle"
            />
          </div>
          <div className="lineup-pic-right-body">
            <h3 style={{}}>
              The Secret to True Growth: Tax Planning & the Family Office Model
            </h3>
            <h5 style={{ marginBottom: "0px" }}>Heath Walters, CPA, CTC</h5>
            <p className="lineup-left-p" style={{ marginTop: "0px" }}>
              thewaltersinstitute.org
            </p>
            <p>
              Heath’s sharing his greatest lessons from over a decade in HNW tax
              planning, including:
            </p>
            <p className="bullet-point">
              • The{" "}
              <span style={{ fontWeight: "800" }}>
                seven most critical areas
              </span>{" "}
              of tax planning to master as a financial advisor
            </p>
            <p className="bullet-point">
              • How to{" "}
              <span style={{ fontWeight: "800" }}>double your AUM</span> in just
              two years by leveraging the expertise of other specialists
            </p>
          </div>
        </div>
        <div className="lineup-pic-left">
          <div className="lineup-pic-left-body">
            <h3 style={{}}>Captive Insurance Strategy</h3>
            <h5 style={{ marginBottom: "0px" }}>Randy Sadler</h5>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.captivatingthinking.com"
            >
              <p className="lineup-left-p" style={{ marginTop: "0px" }}>
                captivatingthinking.com
              </p>
            </a>
            <p>
              Learn how to help your clients create new income streams while
              mitigating risk in a tax-efficient way through captive insurance
              from
              <span style={{ fontWeight: "800" }}>
                {" "}
                the only captive insurance company to successfully challenge the
                IRS and win.
              </span>{" "}
            </p>
            <p className="bullet-point">
              • How business owners can benefit from captive insurance
            </p>
            <p className="bullet-point">
              • Pros and cons of captive insurance vs. traditional commercial
              insurance policies and self-insurance
            </p>
          </div>
          <div className="lineup-pic-left-img">
            <img
              src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/Rand-ellipse.png"
              alt="randy-circle-shot"
            />
          </div>
        </div>
        <div className="lineup-pic-right spacing">
          <div className="lineup-pic-right-img">
            <img
              src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/dan-goodwin-ellipse.png"
              alt="daniel-goodwin-headshot"
            />
          </div>
          <div className="lineup-pic-right-body">
            <h3 style={{}}>
              Tax Planning Opportunities in a Real Estate Portfolio
            </h3>
            <h5 style={{ marginBottom: "0px" }}>Daniel C. Goodwin</h5>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.providentwealthllc.com"
            >
              <p className="lineup-left-p" style={{ marginTop: "0px" }}>
                providentwealthllc.com
              </p>
            </a>
            <p>
              Become indispensable to real estate investors by showing them{" "}
              <span style={{ fontWeight: "800" }}>
                the biggest tax-saving opportunities they’re probably
                overlooking
              </span>
              , and get up-to-date on tax law changes that may affect investors
              with large real estate portfolios.
            </p>
          </div>
        </div>
        <div className="lineup-pic-left">
          <div className="lineup-pic-left-body">
            <h3 style={{}}>Marketing Your Specialty as an Advisor</h3>
            <h5 style={{ marginBottom: "0px" }}>Katie Cress</h5>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.indigomarketingagency.com"
            >
              <p className="lineup-left-p" style={{ marginTop: "0px" }}>
                indigomarketingagency.com
              </p>
            </a>
            <p>
              Learn to{" "}
              <span style={{ fontWeight: "800" }}>
                leverage the expertise that sets your practice apart
              </span>{" "}
              and positions you favorably in the minds of your ideal prospects.
            </p>
            <p className="bullet-point">
              • Designing a website to maximize word-of-mouth referrals
            </p>
            <p className="bullet-point">
              • Speaking effectively to the specific challenges of your target
              market
            </p>
            <p className="bullet-point">
              • Leveraging email and social media to keep your competitive
              advantage top of mind with people you know who can refer ideal
              clients
            </p>
          </div>
          <div className="lineup-pic-left-img">
            <img
              src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/katie-ellipse.png"
              alt="katie-circle"
            />
          </div>
        </div>
        <div className="lineup-pic-right spacing">
          <div className="lineup-pic-right-img">
            <img
              src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/bonus-session-1.png"
              alt="coming-soon"
            />
          </div>
          <div className="lineup-pic-right-body bonus">
            <h3 style={{}}>How to Partner with Personal Injury Attorneys</h3>
            <h5 style={{ marginBottom: "0px" }}>TBD</h5>
            <p className="lineup-left-p" style={{ marginTop: "0px" }}></p>
            <p>
              Discover how to create win-win partnerships with personal injury
              attorneys and open the door to a new client demographic for your
              firm.
            </p>
          </div>
        </div>

        <div
          className="ready"
          style={{
            width: "80%",
            textAlign: "center",
            margin: "auto",
            marginTop: "80px",
          }}
        >
          <Link to="https://go.heathwalters.com/l/986071/2022-08-23/m5156v">
            <img
              style={{ width: "70%" }}
              src="https://walterstaxstrategies.com/wp-content/uploads/2022/12/Group-156.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

// export const Head = (props) => {
//   props.data.title = "The Financial Innovation Summit | The Walters Institute"
//   props.data.description =
//     "At the Summit, you'll learn powerful strategies for tax mitigation, how to build credibility with wealthy individuals, and the shortest path to mastering skills that make you invaluable to high-net-worth clients"
//   const { homepage } = props.data

//   return <SEOHead {...props.data} />
// }
