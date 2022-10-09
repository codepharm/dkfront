import React from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';
import { FaPoop, FaPiggyBank } from 'react-icons/fa';
import { GiArmoredPants } from 'react-icons/gi';
import { TbBarbell } from 'react-icons/tb';

import RowIcons from '../../components/Rows/RowIcons/RowIcons';
import RowSingleImg from '../../components/Rows/RowSingleImg/RowSingleImg';
import RowImages from '../../components/Rows/RowImages/RowImages';
import RowTextOnly from '../../components/Rows/RowTextOnly/RowTextOnly';
import addBrand from '../../utils/addBrand';
import overhead from '../../assets/images/overhead.jpg'
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
        `At `,
        addBrand(),
        `, you are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world.`
      ]}
      textStyles={`fs-4`}
    />

<div className={`${styles.bg} bg py-5`}>
      <RowSingleImg
        img={aboutdavid}
        alt={`A winning athlete performing an overhead press with perfect form.`}
        heading={[`Winning.`]}
        text={[`Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deserunt a molestiae incidunt obcaecati corporis harum itaque esse alias magnam!`]}
      />
      
      <RowImages
        image1={{
          img: treadmill,
          alt: `Silhouette of a group of people running for fitness.`,
          heading: [`Warm-up`],
          text: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dolorum beatae non!`],
          icon: [<span className={`fw-light py-2 px-3 fs-4`} style={{borderRadius: '50%', border: '2px solid white'}}>1</span>]
        }}
        image2={{
          img: deadlift,
          alt: `Silhouette of a group of people running for fitness.`,
          heading: [`Lift`],
          text: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio beatae non!`],
          icon: [<span className={`fw-light py-2 px-3 fs-4`} style={{borderRadius: '50%', border: '2px solid white'}}>2</span>]
        }}
        image3={{
          img: groupRun,
          alt: `Silhouette of a group of people running for fitness.`,
          heading: [`Run`],
          text: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odionon!`],
          icon: [<span className={`fw-light py-2 px-3 fs-4`} style={{borderRadius: '50%', border: '2px solid white'}}>3</span>]
        }}
      />
    </div>

    <RowIcons
      icon1={{
        icon: <TbBarbell size={40} />,
        heading: [`Best Equipment`],
        text: [
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
        ],
      }}
      icon2={{
        icon: <AiOutlineDollarCircle size={40} />,
        heading: [`Cost Effective`],
        text: [
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
        ],
      }}
      icon3={{
        icon: <BsTrophy size={40} />,
        heading: [`Reach Your Goals`],
        text: [
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
        ],
      }}
    />
   </div>
  )
}

export default About