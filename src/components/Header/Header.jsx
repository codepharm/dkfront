import styles from './Header.module.css';

const Header = () => {
  const scrollToForm = () => {
    setTimeout(() => document.querySelector(`#contact`).scrollIntoView({ block: "center", behavior: "smooth" }));
  };

  return (
    <header id='header' className={`${styles.headerWrapper}`}>
      <div className={`${styles.header} textRed`}>
        <div className={`${styles.wrapper} col-8 col-sm-6`}>
          <h1 className={`${styles.h1}`}><span className={`${styles.dk}`}>DK</span><span className={`${styles.dojo}`}>Dojo</span></h1>
          <h4 className={`${styles.h4}`}>Lorem ipsum dolor sit amet adipisicing elit.</h4>
          <h6 className={`${styles.h6}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore at praesentium repellendus accusamus illo?</h6>
          <button onClick={() => scrollToForm()} className={`${styles.button}`}>GET RESULTS</button>
        </div>
      </div>
    </header>
  )
}

export default Header