import Instagram from '../Instagram/Instagram';

import styles from './Header.module.css';

const Header = () => {
  const scrollToForm = () => {
    setTimeout(() => document.querySelector(`#contact`).scrollIntoView({ block: "center", behavior: "smooth" }));
  };

  return (
    <header id='header' className={`${styles.headerWrapper}`}>
      <div className={`${styles.instagram}`}>
        <Instagram size={30} />
      </div>
      <div className={`${styles.header} textRed`}>
        <div className={`${styles.wrapper} col-8 col-sm-6`}>
          <h1 className={`${styles.h1}`}><span className={`${styles.dk}`}>DK</span><span className={`${styles.dojo}`}>Dojo</span></h1>
          <h4 className={`${styles.h4}`}>“You can either suffer the pain of discipline or the pain of regret.” -Jim Rohn</h4>
          <h6 className={`${styles.h6}`}>Stay disciplined. Stay true. Attack with consistent persistency.</h6>
          <button onClick={() => scrollToForm()} className={`${styles.button}`}>GET RESULTS</button>
        </div>
        <div id='headerBottom'></div>
      </div>
    </header>
  )
}

export default Header