import React from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsClockHistory, BsTrophy } from 'react-icons/bs';
import { FaRegThumbsUp } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { TbBarbell } from 'react-icons/tb';

import RowIcons from '../../components/Rows/RowIcons/RowIcons';
import RowImgText from '../../components/Rows/RowImgText/RowImgText';
import RowTextOnly from '../../components/Rows/RowTextOnly/RowTextOnly';
import addBrand from '../../utils/addBrand';
import gym from '../../assets/images/gym.jpg'
import weight from '../../assets/images/weights.jpg'

import styles from './Home.module.css';

const Home = () => {
  return (
   <div className={`${styles.home} text-white py-5 container-fluid`}>
    <RowTextOnly
      heading={[`Dojo Rules`]}
      text={[
        `Welcome to `,
        addBrand(),
        `, please familiarize yourself with the rules below.`
      ]}
      textStyles={`fs-4`}
    />

    <RowIcons
      icon1={<BsClockHistory size={40} />}
      heading1={[`First Rule`]}
      text1={[
        `The first rule of `,
        addBrand(),
        `is, "you do not talk about DK Dojo." Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio tenetur, obcaecati perspiciatis quos.`
      ]}
      icon2={<GiWeightLiftingUp size={40} />}
      heading2={[`Second Rule`]}
      text2={[
        `The second rule of `,
        addBrand(),
        ` is, "you DO NOT talk about DK Dojo." Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
      ]}
      icon3={<FaRegThumbsUp size={40} />}
      heading3={[`Third Rule`]}
      text3={[
        `The third rule of `,
        addBrand(),
        ` if anyone yells stop, goes limp, or taps out, the training session is over. No refunds. Lorem ipsum dolor sit amet consectetur adipisicing elit.`
      ]}
    />

    <div className={`${styles.bg} bg py-5`}>
      <RowImgText
        img={gym}
        alt={`Gym equipment in the background`}
        heading={[`Lorem, ipsum dolor`]}
        text={[
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos obcaecati voluptates quibusdam rem vitae iusto. Suscipit eos alias mollitia.`,
        ]}
      />

      <RowImgText
        img={weight}
        alt={`Gym equipment in the background`}
        heading={[`Lorem, ipsum dolor`]}
        text={[
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos obcaecati voluptates quibusdam rem vitae iusto. Suscipit eos alias mollitia.`,
        ]}
        imgRight
      />
    </div>

    <RowIcons
      icon1={<TbBarbell size={40} />}
      heading1={[`Best Equipment`]}
      text1={[
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
      ]}
      icon2={<AiOutlineDollarCircle size={40} />}
      heading2={[`Cost Effective`]}
      text2={[
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
      ]}
      icon3={<BsTrophy size={40} />}
      heading3={[`Reach Your Goals`]}
      text3={[
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
      ]}
    />

    <RowTextOnly
      heading={[`Join the Dojo TODAY!`]}
      text={[
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora ad dolorum odit adipisci veniam rerum debitis omnis laborum cumque.`
      ]}
      textStyles={`fs-5`}
    />
   </div>
  )
}

export default Home