import React from 'react';
import { XIcon, HamburgerIcon } from './Symbols';
import BrandLogo from './brand-logo';
import styled from 'styled-components';

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
      }}
    >
      {children}
    </ul>
  );
}

function NavLink({ to, children, ...props }) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

function MobileHeader({ navItems, isOpen, onToggle }) {
  return (
    <div className='mobile-header'>
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
            justifyContent: 'space-between', // Change this line
          }}
        >
          <BrandLogo />
          <button className='burger' onClick={onToggle}>
            {isOpen ? <XIcon /> : <HamburgerIcon />}
          </button>
        </nav>
        {isOpen && (
          <div
            style={{
              position: 'fixed',
              top: '50px',
              left: 'auto',
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FlexList>
              {navItems.map((navItem) => (
                <li key={navItem.id} style={{ marginBottom: '20px' }}>
                  <NavLink to={navItem.href}>{navItem.text}</NavLink>
                </li>
              ))}
            </FlexList>
          </div>
        )}
      </header>
    </div>
  );
}

export default MobileHeader;
