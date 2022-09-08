import { motion } from 'framer-motion';
import spanMap from '../../../utils/spanMap';
import styles from './RowSingleImg.module.css';

const RowSingleImg = ({img, alt, heading, text, textStyles}) => {
  return (
    <div className={`${styles.text} container-fluid mx-auto text-center px-3`}>
        <h5>
          { spanMap(heading) }
        </h5>
        <p className={`fw-lighter ${textStyles}`}>
          { spanMap(text) }
        </p>
        <motion.img
          src={img} alt={alt} className={`${styles.img} img-fluid p-4`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}}
        />
    </div>
  )
}

export default RowSingleImg;
