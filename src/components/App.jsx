import { Routes, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from '../pages/Home/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Nutrition from '../pages/Nutrition';
import Products from '../pages/Products';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

import '../styles/global.css';
import '../styles/typography.css';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/nutrition' element={<Nutrition />} />
        <Route path='/products' element={<Products />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
