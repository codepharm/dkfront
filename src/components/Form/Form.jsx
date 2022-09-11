import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha';

import checkEmail from '../../utils/checkEmail';
import useWindowDimensions from '../../utils/windowDimensions';
import styles from './Form.module.css';

const Form = ({recaptchaRef}) => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [disable, setDisable] = useState(true)
  const [token, setToken] = useState('');
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (values.name && values.message && values.email && checkEmail(values.email) === true) {
      setDisable(false);
      return
    }
  }, [values])

  const handleInput = (e) => {
    e.persist();
    if (e.target.name === 'name') {
      setValues((values) => ({
        ...values,
        name: e.target.value,
      }));
    }
    if (e.target.name === 'email') {
      setValues((values) => ({
        ...values,
        email: e.target.value,
      }));
      if (!checkEmail(e.target.value)) {
        setDisable(true);
      }
    }
    if (e.target.name === 'message') {
      setValues((values) => ({
        ...values,
        message: e.target.value,
      }));
    }
    if (!e.target.value) {
      setDisable(true);
    }
    if (e.target.value && e.target.type === 'email' && checkEmail(values.email) === true) {
      setInvalidEmail(false)
    }
  }

  const onBlur = (e) => {
    if (!e.target.value && e.target.type === 'email') {
      setDisable(true);
    } else if (!e.target.value && e.target.type !== 'email') {
      setDisable(true);
    }
    if (e.target.value && e.target.type === 'email' && checkEmail(values.email) === false) {
      setDisable(true);
      setInvalidEmail(true);
    }
    if (e.target.value && e.target.type === 'email' && checkEmail(values.email) === true) {
      setInvalidEmail(false);
    }
  }

  const clearValues = () => {
    setValues({
      name: '',
      email: '',
      message: '',
    })
  }

  const clickHandler = (e) => {
    e.preventDefault();
    if(disable) {
      if(values.email && checkEmail(values.email) === false) {
        toast.error('Invalid email address');
        return;  
      }
      toast.error('Please complete the form');
      return;
    };
    if(!token || token === '') {
      toast.error(`Please verify you're not a robot, reload page if recaptcha is missing`);
      return;
    };

    if (!disable && token && token !== '') {
      toast.info('Thank you for the message! Confirmation incoming...');
      setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 250);
      recaptchaRef.current.reset();
      setToken('')
      setDisable(true);

      // API call
      fetch("https://formsubmit.co/ajax/f61adf2ff38bc5c4deb30cb261bf1ec0", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        })
      })
      .then(response => response.json())
      .then(data => {
        setTimeout(() => toast.info(data.message), 500);
        clearValues();
      })
      .catch(error => toast.error(error.message));
    }
  }

  const recaptchaHandler = () => {
    setToken(recaptchaRef.current.getValue());
  }

  return (
    <form id='contact' className={`${styles.form} mx-auto container-fluid`}>
      <div className={`${styles.row} row`}>
        <label className={`${styles.label} col-lg-2 text-white`} htmlFor="">Name: </label>
        <input
          className={`${styles.input} col-lg-10`}
          type="text"
          placeholder="Enter your name"
          name="name"
          value={values.name}
          onChange={handleInput}
          onBlur={onBlur}
        />
      </div>
      <div className={`${styles.row} row`}>
        <label className={`${styles.label} col-lg-2 text-white`} htmlFor="">Email:</label>
          <input
            className={`${styles.input} col-lg-10`}
            type="email"
            placeholder="Email@domain.com"
            name="email"
            value={values.email}
            onChange={handleInput}
            onBlur={onBlur}
          />
        {
          (values.email && invalidEmail) &&
          <div className={`${styles.invalid} text-end`}>
            Invalid Email
          </div>
        }
      </div>
      <div className={`${styles.row} row`}>
        <label className={`${styles.label} col-lg-2 text-white`} htmlFor="">Message:</label>
        <textarea 
          className={`${styles.textarea} col-lg-10 text-white`}
          name="message"
          cols="30"
          rows="3"
          placeholder="Tell me about your goals."
          value={values.message}
          onChange={handleInput}
          onBlur={onBlur}
        />
      </div>
      <div className={`${styles.recaptchaWrapper} d-flex justify-content-center mt-2`}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={`6Ld-UN8hAAAAAOZA9CcgATnpuNQtdTvugk2P8izj`}
          size={ width >= 375 ? 'normal' : 'compact'}
          onChange={recaptchaHandler}
          theme={'dark'}
        />
      </div>
      <div className="text-center">
        <button
          className={`${styles.button}`}
          onClick={(e) => clickHandler(e)}
        >
          { disable || !token || token === '' ? 'COMPLETE FORM' : 'Send Message' }
        </button>
      </div>
    </form>
  )
}

export default Form;