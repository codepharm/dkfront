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
   <div id='page' className={`${styles.services} text-white py-5 container-fluid`}>
     <RowTextOnly
      heading={[addBrand(), ` Services`]}
      text={[
        `The things you own end up owning you. It's at only after you lose everything that you're free to do anything at `,
        addBrand(),
        `.`,
      ]}
      textStyles={`fs-4`}
    />

    <RowIcons
      icon1={{
        icon: <FaPiggyBank size={40} />,
        heading: [`Not Your Job`],
        text: [
          `The first rule of `,
          addBrand(),
          `is, "you do not talk about DK Dojo." Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio tenetur, obcaecati perspiciatis quos.`
        ],
      }}
      icon2={{
        icon: <GiArmoredPants size={40} />,
        heading: [`Not Your Khakis`],
        text: [
          `The second rule of `,
          addBrand(),
          ` is, "you DO NOT talk about DK Dojo." Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
        ],
      }}
      icon3={{
        icon: <FaPoop size={40} />,
        heading: [`Just Crap`],
        text: [
          `The third rule of `,
          addBrand(),
          ` if anyone yells stop, goes limp, or taps out, the training session is over. No refunds. Lorem ipsum dolor sit amet consectetur adipisicing elit.`
        ],
      }}
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

export default Services;
