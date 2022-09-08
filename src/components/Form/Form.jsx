import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha';

import checkEmail from '../../utils/checkEmail';
import useWindowDimensions from '../../utils/windowDimensions';
import styles from './Form.module.css';

const Form = ({recaptchaRef}) => {
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

  const handleInput = (event) => {
    event.persist();
    if (event.target.name === 'name') {
      setValues((values) => ({
        ...values,
        name: event.target.value,
      }));
    }
    if (event.target.name === 'email') {
      setValues((values) => ({
        ...values,
        email: event.target.value,
      }));
      if (!checkEmail(event.target.value)) {
        setDisable(true);
      }
    }
    if (event.target.name === 'message') {
      setValues((values) => ({
        ...values,
        message: event.target.value,
      }));
    }
    if (!event.target.value) {
      setDisable(true);
    }
  }

  const onBlur = (e) => {
    if (!e.target.value && e.target.type === 'email') {
      toast.error('Please enter your email');
      setDisable(true);
    } else if (!e.target.value && e.target.type !== 'email') {
      toast.error('Please enter your ' + e.target.name);
      setDisable(true);
    }
    if (e.target.value && e.target.type === 'email' && checkEmail(values.email) === false) {
      toast.error('Invalid email address');
      setDisable(true);
      return
    }
  }

  const clearValues = () => {
    recaptchaRef.current.reset();
    setValues({
      name: '',
      email: '',
      message: '',
    })
  }

  const clickHandler = (e) => {
    e.preventDefault();

    if (!disable) {
      toast.info('Thank you for the message! Confirmation incoming...');
      setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 250);

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
          disabled={ disable || !values.name || !values.email || !values.message || !token || token === '' }
          onClick={(e) => clickHandler(e)}
        >
          { disable || !token || token === '' ? 'Complete Form' : 'Send Message' }
        </button>
      </div>
    </form>
  )
}

export default Form;