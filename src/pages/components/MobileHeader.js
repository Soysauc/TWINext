import React from 'react';
import XIcon from './Symbols';
import HamburgerIcon from './Symbols';

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
    <header style={{ position: 'relative', zIndex: '9999' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onToggle}>
          {isOpen ? <XIcon /> : <HamburgerIcon />}
        </button>
      </nav>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'blue',
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
  );
}

export default MobileHeader;