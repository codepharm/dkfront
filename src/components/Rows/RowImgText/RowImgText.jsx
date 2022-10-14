import { motion } from 'framer-motion';
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
          <div className={`fw-lighter`}>
            { spanMap(text) }
          </div>
        </div>
        <motion.div
          className={`col-sm-5`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}}
        >
          <img src={img} className={`p-4 img-fluid`} alt={alt} />
        </motion.div>
      </div>
    )
  }
  return (
    <div className={`${styles.row} row container-fluid`}>
      <motion.div
        className={`col-sm-5`}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
      >
        <img src={img} className={`p-4 img-fluid`} alt={alt} />
      </motion.div>
      <div className={`col-sm-7 m-auto py-5 px-4`}>
        <h4 className={`fw-light`}>
          { spanMap(heading) }
        </h4>
        <div className={`fw-lighter`}>
          { spanMap(text) }
        </div>
      </div>
    </div>
  )
}

export default RowImgText;
