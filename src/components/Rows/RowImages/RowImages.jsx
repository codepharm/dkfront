import { motion } from 'framer-motion';
import styles from './RowImages.module.css';

const injectMotionImage = (image) => {
  return (
    <div className={`${styles.col} col-sm-6 col-md-4 row`}>
      <motion.img
        src={image.img} alt={image.alt} className={`${styles.img} img-fluid p-4`}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

const RowImages = ({image1, image2, image3}) => {
  return (
    <div className={`${styles.row} row container-fluid my-5`}>
      { injectMotionImage(image1) }
      { injectMotionImage(image2) }
      { injectMotionImage(image3) }
    </div>
  )
}

export default RowImages;
