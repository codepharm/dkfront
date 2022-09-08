import spanMap from '../../../utils/spanMap';
import styles from './RowImages.module.css';

const RowImages = ({image1, image2, image3}) => {
  return (
    <div className={`${styles.row} row container-fluid my-5`}>
      <div className={`${styles.col} col-sm-6 col-md-4 row`}>
        <img src={image1.img} alt={image1.alt} className={`${styles.img} img-fluid p-4`}/>
        <div className={`row`}>
          <div className={`col-3`}>
            { spanMap(image1.icon) }
          </div>
          <div className={`col-9`}>
            <h5>
              { spanMap(image1.heading) }
            </h5>
            <p className='fw-lighter'>
              { spanMap(image1.text) }
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        <img src={image2.img} alt={image2.alt} className={`${styles.img} img-fluid p-4`}/>
        <div className={`row`}>
          <div className={`col-3`}>
            { spanMap(image2.icon) }
          </div>
          <div className={`col-9`}>
            <h5>
              { spanMap(image2.heading) }
            </h5>
            <p className='fw-lighter'>
              { spanMap(image2.text) }
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        <img src={image3.img} alt={image3.alt} className={`${styles.img} img-fluid p-4`}/>
        <div className={`row`}>
          <div className={`col-3`}>
            { spanMap(image3.icon) }
          </div>
          <div className={`col-9`}>
            <h5>
              { spanMap(image3.heading) }
            </h5>
            <p className='fw-lighter'>
              { spanMap(image3.text) }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RowImages;
