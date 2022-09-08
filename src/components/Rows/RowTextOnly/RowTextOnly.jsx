import spanMap from '../../../utils/spanMap';
import styles from './RowTextOnly.module.css';

const RowTextOnly = ({heading, text, textStyles}) => {
  return (
    <div className={`${styles.text} mx-auto text-center px-3`}>
      <h2 className={`my-5 fw-light`}>
        { spanMap(heading) }
      </h2>
      <p className={`fw-lighter ${textStyles}`}>
        { spanMap(text) }
      </p>
    </div>
  )
}

export default RowTextOnly;
