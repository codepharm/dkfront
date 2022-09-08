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
   <div id='page' className={`${styles.home} text-white py-5 container-fluid`}>
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
      icon1={{
        icon: <BsClockHistory size={40} />,
        heading: [`First Rule`],
        text: [
          `The first rule of `,
          addBrand(),
          `is, "you do not talk about DK Dojo." Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio tenetur, obcaecati perspiciatis quos.`
        ],
      }}
      icon2={{
        icon: <GiWeightLiftingUp size={40} />,
        heading: [`Second Rule`],
        text: [
          `The second rule of `,
          addBrand(),
          ` is, "you DO NOT talk about DK Dojo." Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!`
        ],
      }}
      icon3={{
        icon: <FaRegThumbsUp size={40} />,
        heading: [`Third Rule`],
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

    <RowTextOnly
      heading={[`Join `, addBrand(),` TODAY!`]}
      text={[
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora ad dolorum odit adipisci veniam rerum debitis omnis laborum cumque.`
      ]}
      textStyles={`fs-5`}
    />
   </div>
  )
}

export default Home