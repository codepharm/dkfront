import React from 'react';
import logo from '../../assets/logos/pharma2code.gif';
import addBrand from '../../utils/addBrand';
import Instagram from '../Instagram/Instagram';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${styles.div} mt-5`}>
      <footer className={`${styles.footer}`}>
        <div className={`textSilver d-flex`}>Copyright © {currentYear}
          <div className={`mx-2`}>
            {addBrand()}
          </div>
          <Instagram size={20} />
        </div>
        <hr className={`my-5`} />
        <p className={`text-center`}>
          <span>
            <span style={{ color: "silver"}}>Website by </span>
            <span className={`fst-italic`} style={{ color: "lime" }}>code</span>
            <span className={`fst-italic`} style={{ color: "#00857c" }}>Pharm</span>
            <img src={logo} style={{ height: '2rem', padding: '0 0.25rem' }} alt="codePharm" />
            <span style={{ color: "silver" }}>Developers</span>
          </span>
        </p>
      </footer>
    </div>
  )
};