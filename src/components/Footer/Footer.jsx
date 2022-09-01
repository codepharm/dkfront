import React from 'react';
import logo from '../../assets/logos/pharma2code.gif';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`${styles.div} mt-5`}
    >
      
      <footer className={`${styles.footer}`}>
        <p className={`textSilver`}>Copyright © {currentYear}
          <span className='fst-italic textShadow'>
            <span style={{ color: "lime" }}> code</span>
            <span style={{ color: "#00857c" }}>Pharm</span>
            <img src={logo} style={{ height: '2rem', padding: '0 0.25rem' }} alt="codePharm" />
            <span style={{ color: "silver" }}>Developers</span>
          </span>
          
        </p>
      </footer>
    </div>
  )
};