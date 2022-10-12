import React from 'react'
import RowSingleImg from '../../components/Rows/RowSingleImg/RowSingleImg';
import RowImages from '../../components/Rows/RowImages/RowImages';
import RowTextOnly from '../../components/Rows/RowTextOnly/RowTextOnly';
import addBrand from '../../utils/addBrand';
import groupRun from '../../assets/images/groupRun.jpg'
import deadlift from '../../assets/images/deadlift.jpg'
import treadmill from '../../assets/images/treadmill.jpg'
import aboutdavid from '../../assets/images/aboutdavid.jpg'
import styles from './About.module.css';

const About = () => {
  return (
    <div id='page' className={`${styles.about} text-white py-5 container-fluid`}>
      <RowTextOnly
        heading={[`About `, addBrand()]}
        text={[
          addBrand(),
          ` will train you to become a future leader, not a soldier. Forget the gimmicks and short-term trends because fitness to you will become a lifestyle. The knowledge you gain with us and the knowledge you continue to grow on your own will keep you informed to stay in form.`
        ]}
        textStyles={`fs-4`}
      />

      <div className={`${styles.bg} bg py-5`}>
        <RowSingleImg
          img={aboutdavid}
          alt={`A picture of David also known as DK`}
          heading={[`Meet DK`]}
          text={[`“It is training only if you improve. Otherwise, it is just suffering.” - DK`]}
        />

        <RowImages
          image1={{
            img: treadmill,
            alt: `People on treadmills`,

          }}
          image2={{
            img: deadlift,
            alt: `A person getting ready to deadlift`,

          }}
          image3={{
            img: groupRun,
            alt: `Silhouette of a group of people running for fitness.`,

          }}
        />
      </div>
    </div>
  )
}

export default About