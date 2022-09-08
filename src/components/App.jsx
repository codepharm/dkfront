import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Form from './Form/Form';
import Gallery from '../pages/Gallery/Gallery';
import Services from '../pages/Services/Services';

import '../styles/global.css';
import '../styles/typography.css';

function App() {
  const recaptchaRef = useRef(null);
  const [path, setPath] = useState('/')
  let location = useLocation();
  useEffect(() => {
    setPath(location.pathname)
    if (location.pathname === '/') {
      setTimeout(() => document.querySelector(`#header`).scrollIntoView({ block: "start", behavior: "smooth" }));
      return;
    }
    setTimeout(() => document.querySelector(`#theFold`).scrollIntoView({ block: "start", behavior: "smooth" }));
  }, [location, path]);

  return (
    <div>
      <NavBar />
      <Header />
      <div id='theFold' style={{height:'5rem'}}></div>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <ToastContainer />
      <Form recaptchaRef={recaptchaRef} />
      <Footer />
    </div>
  );
}

export default App;
