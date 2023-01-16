import { motion } from 'framer-motion';
import { BsInstagram } from 'react-icons/bs';
import styles from './Instagram.module.css';

// set the instagram url here
const urlInstagram = `https://www.instagram.com/dkuong/`;

const Instagram = ({size}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <a
        className={``}
        href={urlInstagram}
        target='_blank' rel='noreferrer'
      >
        <BsInstagram size={size} className={`mx-2 ${styles.instagram} rounded`} color={'ghostwhite'} />
        <span className={`textSilver fs-4`}>dkuong</span>
      </a>
    </motion.div>
  )
}

export default Instagram