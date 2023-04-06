import * as React from "react";
// import Layout from "../components/layout";
// import SEOHead from "../components/head";
import "./components/contacts.module.css";

export default function ContactUs() {
  return (
    //layout
    <>
      <svg
        style={{
          maxHeight: "692px",
          width: "100%",
          position: "relative",
          zIndex: "0",
          marginBottom: "-550px",
        }}
        viewBox="0 0 615 793"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="1399.5" cy="396.5" rx="399.5" ry="396.5" fill="#FBC300" />
      </svg>

      <div style={{ width: "90%", margin: "auto" }}>
        <h1
          style={{
            fontSize: "60px",
            color: "black",
            position: "relative",
            zIndex: "1",
          }}
        >
          Get in touch.
        </h1>
        <h3
          style={{
            fontSize: "30px",
            fontWeight: "500",
            color: "black",
            marginBottom: "80px",
          }}
        >
          We are always happy to chat with <br></br> new friends.
        </h3>
        <div
          className="contact-us-wrapper"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ width: "50%" }}>
            <h1
              style={{
                fontSize: "40px",
                color: "black",
                position: "relative",
                zIndex: "1",
              }}
            >
              Phone
              <div
                className="phone-number"
                style={{
                  fontSize: "28px",
                  marginTop: "20px",
                  fontWeight: "500",
                }}
              >
                <a href="tel:8135178300">813-517-8300</a>
              </div>
            </h1>

            <h1
              style={{
                fontSize: "40px",
                color: "black",
                position: "relative",
                zIndex: "1",
              }}
            >
              Email
              <div
                className="email"
                style={{
                  fontSize: "28px",
                  marginTop: "20px",
                  fontWeight: "500",
                }}
              >
                <a href="mailto:info@thewaltersinstitute.org">
                  info@thewaltersinstitute.org
                </a>
              </div>
            </h1>

            <h1
              style={{
                fontSize: "40px",
                color: "black",
                position: "relative",
                zIndex: "1",
              }}
            >
              In Person
            </h1>
            <h3
              style={{
                fontSize: "27px",
                fontWeight: "500",
                color: "black",
                marginBottom: "80px",
              }}
            >
              16021 N Florida Avenue. <br></br>
              Lutz, FL 33549
            </h3>
          </div>
          <div
            className="map"
            style={{ width: "50%", position: "relative", zIndex: "1" }}
          >
            <iframe
              className="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.516402228248!2d-82.4625414854527!3d28.10029051472154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b8a439c0194b%3A0xadfdcb08d049a20!2s16021%20N%20Florida%20Ave%2C%20Lutz%2C%20FL%2033549!5e0!3m2!1sen!2sus!4v1675872236331!5m2!1sen!2sus"
              width="100%"
              title="map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#072AC6",
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "250px",
          height: "fit-content",
        }}
        className="millionaire index-bottom-div"
      >
        <div
          className="child-mill"
          style={{
            width: "35%",
            marginRight: "auto",
            marginLeft: "10%",
            marginTop: "50px",
          }}
        >
          <h1 style={{ fontSize: "45px", fontWeight: "bold" }}>
            Message us directly
          </h1>
        </div>
        {/* <iframe
          className="home-form"
          style={{ width: "80%", margin: "auto", height: "1250px" }}
          src="https://go.pardot.com/l/986071/2022-11-17/m5jxdj"
          width="100%"
          height="850"
          type="text/html"
          title="form"
          allowtransparency="true"
        ></iframe> */}
      </div>
    </>
  );
}
