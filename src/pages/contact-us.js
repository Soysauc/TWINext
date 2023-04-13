import * as React from "react";
// import Layout from "../components/layout";
import MyApp from "./_app";
// import SEOHead from "../components/head";
export default function ContactUs() {
  return (
    //layout
    <div className="contact">
      <svg
        className="contact__circle"
        width="615"
        height="793"
        viewBox="0 0 615 793"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="875" cy="396.5" rx="399.5" ry="396.5" fill="#FBC300" />
      </svg>

      <div className="contact__content">
        <h1 className="contact__title">Get in touch.</h1>
        <h3 className="contact__text">
          We are always happy to chat with <br></br> new friends.
        </h3>
        <div className="contact-us-wrapper">
          <div style={{ width: "50%" }}>
            <h2 className="contact__subheading">
              Phone
              <div className="contact__info">
                <a href="tel:8135178300">813-517-8300</a>
              </div>
            </h2>

            <h2 className="contact__subheading">
              Email
              <div className=" contact__info">
                <a href="mailto:customerservice@thewaltersinstitute.org">
                  customerservice@thewaltersinstitute.org
                </a>
              </div>
            </h2>

            <h2 className="contact__subheading">In Person</h2>
            <h3 className="contact__text">
              16021 N Florida Avenue. <br></br>
              Lutz, FL 33549
            </h3>
          </div>
          <div className="contact__map">
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
      <div className="content__form-container">
        <div className="content__mill">
          <h2 className="content__form-title">Message us directly</h2>
        </div>
        <iframe
          className="contact__form"
          src="https://go.pardot.com/l/986071/2022-11-17/m5jxdj"
          width="100%"
          height="850"
          type="text/html"
          title="form"
          allowtransparency="true"
        ></iframe>
      </div>
    </div>
  );
}
