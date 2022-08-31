import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import styles from './NavBar.module.css';

const NavBar = () => {

  return (
    <Navbar bg="black" variant='dark' expand="md">
      <Container>
        <Navbar.Brand className={`${styles.brand}`} href="#home"><span className={`${styles.dk}`}>DK</span><span className={`${styles.dojo}`}>Dojo</span></Navbar.Brand>
        <Navbar.Toggle className={`${styles.toggler}`} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.linkWrapper}`}>
            <Link className={`${styles.link}`} to='/'>Home</Link>
            <Link className={`${styles.link}`} to='/about'>About</Link>
            <Link className={`${styles.link}`} to='/services'>Services</Link>
            <Link className={`${styles.link}`} to='/nutrition'>Nutrition</Link>
            <Link className={`${styles.link}`} to='/products'>Products</Link>
            <Link className={`${styles.link}`} to='/gallery'>Gallery</Link>
            <Link className={`${styles.link}`} to='/contact'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
