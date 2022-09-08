import spanMap from '../../../utils/spanMap';
import styles from './RowImgText.module.css';

const RowImgText = ({img, alt, heading, text, imgRight}) => {
  if (imgRight) {
    return (
      <div className={`${styles.row} row container-fluid`}>
        <div className={`col-sm-7 m-auto py-5 px-4`}>
          <h4 className={`fw-light`}>
            { spanMap(heading) }
            </h4>
          <p className={`fw-lighter`}>
            { spanMap(text) }
          </p>
        </div>
        <div className={`col-sm-5`}>
          <img src={img} className={`p-4 img-fluid`} alt={alt} />
        </div>
      </div>
    )
  }
  return (
    <div className={`${styles.row} row container-fluid`}>
      <div className={`col-sm-5`}>
        <img src={img} className={`p-4 img-fluid`} alt={alt} />
      </div>
      <div className={`col-sm-7 m-auto py-5 px-4`}>
        <h4 className={`fw-light`}>
          { spanMap(heading) }
        </h4>
        <p className={`fw-lighter`}>
          { spanMap(text) }
        </p>
      </div>
    </div>
  )
}

export default RowImgText;
