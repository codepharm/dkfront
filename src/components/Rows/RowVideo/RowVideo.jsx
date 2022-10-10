import { motion } from 'framer-motion';
import styles from './RowVideo.module.css';

/**
 * @example <RowVideo url={`https://youtube.com/embed/UeJb4kh-nwI`}/>
 * @param {String} url
 * @returns centered video component for youtube iframe embed
 */

const RowVideo = ({url}) => {
  return (
    <motion.div
      className={`${styles.container} container-fluid mx-auto text-center px-3`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125, duration: 0.5 }}
    >
      <iframe
        className={`${styles.iframe} ratio ratio-16x9`}
        src={url}
        height='100%'
        allowFullScreen
        title='YouTube video player'
      />
    </motion.div>
  )
}

export default RowVideo;
