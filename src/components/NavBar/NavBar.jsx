import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

import styles from './NavBar.module.css';

const navItems = [
  {
    to: `/`,
    text: `HOME`,
  },
  {
    to: `/about`,
    text: `ABOUT`,
  },
  {
    to: `/services`,
    text: `SERVICES`,
  },
  {
    to: `/gallery`,
    text: `GALLERY`,
  },
]

const activeStyle = {
  color: 'white',
};

const injectNavLinks = (onClick) => {
  const navLinks = [];
  navItems.map((item, i) => navLinks.push(
    <NavLink
      key={i}
      className={`${styles.navlink}`}
      onClick={onClick}
      to={item.to}
      style={({ isActive }) => isActive ? activeStyle : undefined}
    >
      {item.text}
    </NavLink>
  ));
  return navLinks;
}

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="black" variant='dark' expand="sm" className={`${styles.navWrapper} sticky-top`}  expanded={expanded}>
      <Container className={`${styles.container}`}>
        <Navbar.Brand className={`${styles.brand}`} href="#"><span className={`${styles.dk}`}>DK</span><span className={`${styles.dojo}`}>Dojo</span></Navbar.Brand>
        <Navbar.Toggle className={`${styles.toggler}`} aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav" className={`${styles.navlinkWrapper}`}>
          { injectNavLinks(() => setExpanded(false)) }
          <div
            className={`${styles.navlink}`}
            onClick={() => document.querySelector(`#contact`).scrollIntoView({ block: "center", behavior: "smooth" })}
          >
            CONTACT
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
