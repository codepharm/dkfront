import spanMap from '../../../utils/spanMap';
import styles from './RowIcons.module.css';

const RowIcons = ({icon1, icon2, icon3}) => {
  return (
    <div className={`${styles.row} row text-center my-5`}>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        {icon1.icon}
        <h5>
          { spanMap(icon1.heading) }
        </h5>
        <p className='fw-lighter'>
          { spanMap(icon1.text) }
        </p>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        {icon2.icon}
        <h5>
          { spanMap(icon2.heading) }
        </h5>
        <p className='fw-lighter'>
          { spanMap(icon2.text) }
        </p>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        {icon3.icon}
        <h5>
          { spanMap(icon3.heading) }
        </h5>
        <p className='fw-lighter'>
          { spanMap(icon3.text) }
        </p>
      </div>
    </div>
  )
}

export default RowIcons