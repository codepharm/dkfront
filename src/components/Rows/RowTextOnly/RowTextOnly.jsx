import styles from './RowTextOnly.module.css';

const RowTextOnly = ({heading, text, textStyles}) => {
  return (
    <div className={`${styles.text} mx-auto text-center px-3`}>
      <h2 className={`my-5 fw-light`}>
        {
          heading.map((e, index) => {
            return <span key={index}>{e}</span>
          })
        }
      </h2>
      <p className={`fw-lighter ${textStyles}`}>
        {
          text.map((e, index) => {
            return <span key={index}>{e}</span>
          })
        }
      </p>
    </div>
  )
}

export default RowTextOnly;
