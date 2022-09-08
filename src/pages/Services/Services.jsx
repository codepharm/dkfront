import React from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';
import { FaPoop, FaPiggyBank } from 'react-icons/fa';
import { GiArmoredPants } from 'react-icons/gi';
import { TbBarbell } from 'react-icons/tb';

import RowIcons from '../../components/Rows/RowIcons/RowIcons';
import RowImgText from '../../components/Rows/RowImgText/RowImgText';
import RowTextOnly from '../../components/Rows/RowTextOnly/RowTextOnly';
import addBrand from '../../utils/addBrand';
import gym from '../../assets/images/gym.jpg'
import weight from '../../assets/images/weights.jpg'

import styles from './Services.module.css';

const Services = () => {
  return (
   <div className={`${styles.services} text-white py-5 container-fluid`}>
     <RowTextOnly
      heading={[`Services `, addBrand()]}
      text={[
        `The things you own end up owning you. It's at only after you lose everything that you're free to do anything at `,
        addBrand(),
        `.`,
      ]}
      textStyles={`fs-4`}
    />

    <RowIcons
      icon1={ <FaPiggyBank size={40} />}
      heading1={[`Not Your Job`]}
      text1={[
        `The first rule of `,
        addBrand(),
        `is, "you do not talk Services DK Dojo." Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio tenetur, obcaecati perspiciatis quos.`
      ]}
      icon2={ <GiArmoredPants size={40} />}
      heading2={[`Not Your Khakis`]}
      text2={[
        `The second rule of `,
        addBrand(),
        ` is, "you DO NOT talk Services DK Dojo." Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
      ]}
      icon3={<FaPoop size={40} />}
      heading3={[`Just Crap`]}
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

export default Services;
