import styles from './RowIcons.module.css';

const RowIcons = ({icon1, heading1, text1, icon2, heading2, text2, icon3, heading3, text3}) => {
  return (
    <div className={`${styles.row} row text-center my-5`}>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        {icon1}
        <h5>
          {
            heading1.map((e, index) => {
              return <span key={index}>{e}</span>
            })
          }
        </h5>
        <p className='fw-lighter'>
          {
            text1.map((e, index) => {
              return <span key={index}>{e}</span>
            })
          }
        </p>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        {icon2}
        <h5>
          {
            heading2.map((e, index) => {
              return <span key={index}>{e}</span>
            })
          }
        </h5>
        <p className='fw-lighter'>
          {
            text2.map((e, index) => {
              return <span key={index}>{e}</span>
            })
          }
        </p>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        {icon3}
        <h5>
          {
            heading3.map((e, index) => {
              return <span key={index}>{e}</span>
            })
          }
        </h5>
        <p className='fw-lighter'>
          {
            text3.map((e, index) => {
              return <span key={index}>{e}</span>
            })
          }
        </p>
      </div>
    </div>
  )
}

export default RowIcons