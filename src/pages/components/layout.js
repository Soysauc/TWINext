import * as React from 'react';
import Footer from './footer';
import Header from './header';
// import '../styles.css';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <TawkMessengerReact
        propertyId='6362bebbb0d6371309ccf6cf'
        widgetId='1ggsri2ua'
      />
      <Footer />
    </>
  );
};

export default Layout;
