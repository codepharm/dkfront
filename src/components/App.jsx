import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Form from './Form/Form';
import Gallery from '../pages/Gallery/Gallery';
import Services from '../pages/Services/Services';
// import Nutrition from '../pages/Nutrition';
// import Products from '../pages/Products';
// import Contact from '../pages/Contact';

import '../styles/global.css';
import '../styles/typography.css';

function App() {
  const recaptchaRef = useRef(null);
  return (
    <div>
      <NavBar />
      <Header />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        {/* <Route path='/nutrition' element={<Nutrition />} /> */}
        {/* <Route path='/products' element={<Products />} /> */}
        <Route path='/gallery' element={<Gallery />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      <ToastContainer />
      <Form recaptchaRef={recaptchaRef} />
      <Footer />
    </div>
  );
}

export default App;
