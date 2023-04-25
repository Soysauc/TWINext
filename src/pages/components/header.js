import * as React from "react"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
  Div,
  Link,
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
  ctaButton,
} from "./header.css.ts"
import BrandLogo from "./brand-logo"
import "./header.css"

const data = {
  navItems: [
    {
      id: 0,
      navItemType: "Link",
      href: "/who-we-are",
      text: "Who We Are",
    },
    {
      id: 1,
      navItemType: "Link",
      href: "/what-we-do",
      text: "What We Do",
    },
    {
      id: 2,
      navItemType: "Link",
      href: "/pricing-structure",
      text: "Pricing",
    },
    {
      id: 3,
      navItemType: "Link",
      href: "/faq",
      text: "FAQ",
    },
    {
      id: 4,
      navItemType: "Link",
      href: "/insights",
      text: "Insights",
    },

    {
      id: 5,
      navItemType: "Link",
      href: "/education",
      text: "Education",
    },
    // {
    //   id: 6,
    //   navItemType: "Link",
    //   href: `http://education.thewaltersinstitute.org`,
    //   text: "Portal",
    // },
    // {
    //   id: 7,
    //   navItemType: "Link",
    //   href: "/education",
    //   text: "MasterClass",
    // },
  ],
  cta: {
    href: "contact-us",
    text: "Contact",
  },
}

export default function Header() {
  const { navItems, cta } = data
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <header style={{ position: "relative", zIndex: "9999" }}>
      <div
        className="banner"
        style={{ backgroundColor: "#072AC6", textAlign: "center" }}
      >
        <h2
          style={{
            color: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          Save the date! Our next Masterclass starts{" "}
          <Link to="/education">March 21st @ 9:30am EST</Link>
        </h2>
      </div>
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
      />
      <Container className={desktopHeaderNavWrapper}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <nav>
            <FlexList gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    <NavLink
                      style={{
                        fontWeight: "400",
                        color: "black",
                        fontSize: "22px",
                      }}
                      to={`${navItem.href}`}
                      className="nav-links"
                    >
                      {navItem.text}
                    </NavLink>
                  </li>
                ))}
            </FlexList>
          </nav>
          <Div className={ctaButton}>
            {cta && (
              <Button to={`/${cta.href}`} className="contact-us-button">
                {cta.text}
              </Button>
            )}
          </Div>
        </Flex>
      </Container>
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
            }
          >
            <NavLink to="">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </span>
          <Flex>
            <Space />

            <Nudge right={3}>
              <InteractiveIcon
                title="Toggle menu"
                onClick={() => setOpen(!isOpen)}
                className={
                  mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
                }
              >
                {isOpen ? <X /> : <Menu />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
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
                    fontWeight: "400",
                    color: "white",
                    fontSize: "22px",
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
  )
}
