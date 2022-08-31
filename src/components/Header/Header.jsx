import React from 'react'

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} textRed`}>
      <div className={`${styles.wrapper} col-8 col-sm-6`}>
        <h1 className={`${styles.h1}`}><span className={`${styles.dk}`}>DK</span><span className={`${styles.dojo}`}>Dojo</span></h1>
        <h4 className={`${styles.h4}`}>Lorem ipsum dolor sit amet adipisicing elit.</h4>
        <h6 className={`${styles.h6}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore at praesentium repellendus accusamus illo?</h6>
        <button className={`${styles.button}`}>CLICK ME</button>
      </div>
    </header>
  )
}

export default Header