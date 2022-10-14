import { motion } from 'framer-motion';
import spanMap from '../../../utils/spanMap';
import styles from './RowIcons.module.css';

const injectMotionIcon = (icon) => {
  return (
    <motion.div
      className={`${styles.col} col-sm-6 col-md-4`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon.icon}
      <h5>
        { spanMap(icon.heading) }
      </h5>
      <div className='fw-lighter'>
        { spanMap(icon.text) }
      </div>
    </motion.div>
  )
}

const RowIcons = ({icon1, icon2, icon3}) => {
  return (
    <div className={`${styles.row} row text-center my-5`}>
      {injectMotionIcon(icon1)}
      {injectMotionIcon(icon2)}
      {injectMotionIcon(icon3)}
    </div>
  )
}

export default RowIcons