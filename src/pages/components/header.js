import React, { useState } from 'react';
import { XIcon, HamburgerIcon } from './Symbols';

import BrandLogo from './brand-logo';

const desktopHeaderNavWrapper = 'desktop-header-nav-wrapper';
// const mobileHeaderNavWrapper = {
//   open: 'mobile-header-nav-wrapper open',
//   closed: 'mobile-header-nav-wrapper closed',
// };
const mobileHeaderNavWrapper = {
  open: 'mobile-header-nav-wrapper open',
  closed: 'mobile-header-nav-wrapper closed',
  closedStyle: { display: 'none' },
};

const mobileNavOverlay = 'mobile-nav-overlay';
const mobileNavLink = 'mobile-nav-link';
const mobileNavSVGColorWrapper = {
  primary: 'mobile-nav-svg-color-wrapper primary',
  reversed: 'mobile-nav-svg-color-wrapper reversed',
};
const ctaButton = 'cta-button';

function Container({ className, children }) {
  return <div className={`container ${className || ''}`}>{children}</div>;
}

function Space({ size }) {
  return <div style={{ height: size }} />;
}

function Flex({ variant, children }) {
  const justifyContent =
    variant === 'spaceBetween' ? 'space-between' : 'center';
  return <div style={{ display: 'flex', justifyContent }}>{children}</div>;
}

function FlexList({ gap, responsive, variant, children }) {
  const flexDirection = responsive ? 'column' : 'row';
  const alignItems = variant === 'stretch' ? 'stretch' : 'center';
  const listStyleType = 'none';
  const liStyle = { marginBottom: gap, marginRight: gap };
  return (
    <ul
      style={{
        listStyleType,
        display: 'flex',
        flexDirection,
        alignItems,
      }}
    >
      {React.Children.map(children, (child, index) => (
        <li key={index} style={liStyle}>
          {child}
        </li>
      ))}
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

function Button({ to, children, ...props }) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

function InteractiveIcon({ title, onClick, children, ...props }) {
  return (
    <button type='button' title={title} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

function Nudge({ right, children }) {
  return <div style={{ marginRight: right }}>{children}</div>;
}

function VisuallyHidden({ children }) {
  return (
    <span style={{ position: 'absolute', clip: 'rect(0 0 0 0)' }}>
      {children}
    </span>
  );
}

function Div({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Link({ to, children }) {
  return <a href={to}>{children}</a>;
}

const data = {
  navItems: [
    {
      id: 0,
      navItemType: 'Link',
      href: '/who-we-are',
      text: 'Who We Are',
    },
    {
      id: 1,
      navItemType: 'Link',
      href: '/what-we-do',
      text: 'What We Do',
    },
    {
      id: 2,
      navItemType: 'Link',
      href: '/pricing-structure',
      text: 'Pricing',
    },
    {
      id: 3,
      navItemType: 'Link',
      href: '/faq',
      text: 'FAQ',
    },
    {
      id: 4,
      navItemType: 'Link',
      href: '/insights',
      text: 'Insights',
    },
    {
      id: 5,
      navItemType: 'Dropdown',
      text: 'Education',
      children: [
        {
          id: 6,
          navItemType: 'Link',
          href: `http://education.thewaltersinstitute.org`,
          text: 'Portal',
        },
        {
          id: 7,
          navItemType: 'Link',
          href: '/education',
          text: 'MasterClass',
        },
      ],
    },
  ],
  cta: {
    href: 'contact-us',
    text: 'Contact',
  },
};
const dropdownMenu = {
  position: 'absolute',
  backgroundColor: '#072AC6',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: 1,
  display: 'none',
  opacity: 0,
  transition: 'opacity 0.3s ease',
};

const dropdownItem = {
  fontWeight: '400',
  color: 'white',
  fontSize: '18px',
  display: 'block',
  padding: '12px 16px',
  textDecoration: 'none',
};
export default function Header() {
  const { navItems, cta } = data;
  const [isOpen, setOpen] = useState(false);
  const [dropdownVisibility, setDropdownVisibility] = useState({});

  const handleMouseEnter = (id) => {
    setDropdownVisibility({ ...dropdownVisibility, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setDropdownVisibility({ ...dropdownVisibility, [id]: false });
  };
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // React.useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflowY = 'hidden';
  //   } else {
  //     document.body.style.overflowY = 'visible';
  //   }
  // }, [isOpen]);

  return (
    <header style={{ position: 'relative', zIndex: '9999' }}>
      <div
        className='banner'
        style={{ backgroundColor: '#072AC6', textAlign: 'center' }}
      >
        <h2
          style={{
            color: 'white',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          Save the date! Our next Masterclass starts{' '}
          <Link to='/education'>May 9st @ 11:00am EST</Link>
        </h2>
      </div>
      <link
        rel='stylesheet'
        href='https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css'
      />
      <Container className={desktopHeaderNavWrapper}>
        <Space size={2} />
        <Flex variant='spaceBetween'>
          <NavLink to='/'>
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <nav>
            <FlexList gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    {navItem.navItemType === 'Dropdown' ? (
                      <div
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                        }}
                        onMouseEnter={() => handleMouseEnter(navItem.id)}
                        onMouseLeave={() => handleMouseLeave(navItem.id)}
                      >
                        <span
                          style={{
                            fontWeight: '400',
                            color: 'black',
                            fontSize: '22px',
                          }}
                          className='nav-links'
                        >
                          {navItem.text}
                        </span>
                        <div
                          id={`dropdown-${navItem.id}`}
                          style={{
                            ...dropdownMenu,
                            display: dropdownVisibility[navItem.id]
                              ? 'block'
                              : 'none',
                            opacity: dropdownVisibility[navItem.id] ? 1 : 0,
                          }}
                        >
                          {navItem.children.map((child) => (
                            <NavLink
                              key={child.id}
                              style={dropdownItem}
                              to={`${child.href}`}
                              className='nav-links'
                            >
                              {child.text}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        style={{
                          fontWeight: '400',
                          color: 'black',
                          fontSize: '22px',
                        }}
                        to={`${navItem.href}`}
                        className='nav-links'
                      >
                        {navItem.text}
                      </NavLink>
                    )}
                  </li>
                ))}
            </FlexList>
          </nav>
          <Div className={ctaButton}>
            {cta && (
              <Button to={`/${cta.href}`} className='contact-us-button'>
                {cta.text}
              </Button>
            )}
          </Div>
        </Flex>
      </Container>
      <Container
        className={mobileHeaderNavWrapper[isOpen ? 'open' : 'closed']}
        style={isOpen ? null : mobileHeaderNavWrapper.closedStyle}
      >
        {' '}
        <Space size={2} />
        <Flex variant='spaceBetween'>
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? 'reversed' : 'primary']
            }
          >
            <NavLink to=''>
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </span>
          <Flex>
            <Space />

            <Nudge right={3}>
              <InteractiveIcon
                title='Toggle menu'
                onClick={() => setOpen(!isOpen)}
                className={
                  mobileNavSVGColorWrapper[isOpen ? 'reversed' : 'primary']
                }
              >
                g{isOpen ? <XIcon /> : <HamburgerIcon />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isMounted && isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant='stretch'>
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  <NavLink to={`${navItem.href}`} className={mobileNavLink}>
                    {navItem.text}
                  </NavLink>
                </li>
              ))}
              <li key={5}>
                <NavLink
                  className={mobileNavLink}
                  style={{
                    fontWeight: '400',
                    color: 'white',
                    fontSize: '22px',
                  }}
                  to={`/contact-us`}
                >
                  Contact Us
                </NavLink>
              </li>
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  );
}
