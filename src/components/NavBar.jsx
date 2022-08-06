import { Link } from 'react-router-dom';

const navStyle = {
  display:'flex',
  gap:'0.5rem',
  justifyContent:'center'
}

const NavBar = () => {

  return (
    <div style={navStyle}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/services'>Services</Link>
      <Link to='/nutrition'>Nutrition</Link>
      <Link to='/products'>Products</Link>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default NavBar;
