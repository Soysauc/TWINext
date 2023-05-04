import React from 'react';
import { XIcon, HamburgerIcon } from './Symbols';
import BrandLogo from './brand-logo';

const mobileNavOverlay = 'mobile-nav-overlay';
const mobileNavLink = 'mobile-nav-link';

function FlexList({ children }) {
  return (
    <ul
      style={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </ul>
  );
}

function NavLink({ to, children, ...props }) {
  return (
    <a
      className='mobile__link'
      href={to}
      {...props}
      style={{
        textDecoration: 'none',
        color: 'white',
        ...props.style,
        cursor: 'pointer',
      }}
    >
      {children}
    </a>
  );
}

function MobileHeader({ navItems, isOpen, onToggle, cta, className }) {
  function handleClose() {
    onToggle(false);
  }
  return (
    <div className={className}>
      <header
        style={{
          position: 'relative',
          zIndex: '9999',
          background: 'white',
          paddingTop: '15px',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <NavLink to='/'>
            <BrandLogo />
          </NavLink>
          <button className='burger' onClick={onToggle}>
            {isOpen ? <XIcon onClick={handleClose} /> : <HamburgerIcon />}
          </button>
        </nav>
        {isOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'blue',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              style={{
                background: 'blue',
                border: 'none',
                position: 'absolute',
                top: 15,
                right: 15,
              }}
              className='close-button'
              onClick={handleClose}
            >
              <XIcon />
            </button>
            <FlexList>
              {navItems.map((navItem) => (
                <li
                  key={navItem.id}
                  style={{
                    marginBottom: '20px',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  <NavLink to={navItem.href}>{navItem.text}</NavLink>
                </li>
              ))}
              <li key={5}>
                <NavLink
                  className={mobileNavLink}
                  style={{
                    fontWeight: '400',
                    color: 'white',
                    fontSize: '22px',
                    textDecoration: 'none',
                  }}
                  to={`/contact-us`}
                >
                  Contact Us
                </NavLink>
              </li>
            </FlexList>
          </div>
        )}
      </header>
    </div>
  );
}

export default MobileHeader;
