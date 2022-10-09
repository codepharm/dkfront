import React from 'react'
import { RiTeamLine } from 'react-icons/ri';
import { MdOutlineComputer } from 'react-icons/md';
import { GiWeightLiftingUp, GiThreeFriends } from 'react-icons/gi';
import { TbBarbell } from 'react-icons/tb';
import { TiInputCheckedOutline } from 'react-icons/ti';

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
        icon: <RiTeamLine size={40} />,
        heading: [`First Rule`],
        text: [
          `The first rule of `,
          addBrand(),
          ` is: Train to become a future leader, not a soldier.`
        ],
      }}
      icon2={{
        icon: <GiWeightLiftingUp size={40} />,
        heading: [`Second Rule`],
        text: [
          `The second rule of `,
          addBrand(),
          ` is: Turn fitness into a lifestyle, not a hobby.`
        ],
      }}
      icon3={{
        icon: <TiInputCheckedOutline size={40} />,
        heading: [`Third Rule`],
        text: [
          `The third rule of `,
          addBrand(),
          ` is: Be informed to stay in form.`
        ],
      }}
    />

    <div className={`${styles.bg} bg py-5`}>
      <RowImgText
        img={gym}
        alt={`Gym equipment in the background`}
        heading={[`Beginner, Intermediate, Advanced?`]}
        text={[
          `No matter what level you are, we'll make sure you receive something of value from the training offered here.`,
        ]}
      />

      <RowImgText
        img={weight}
        alt={`Gym equipment in the background`}
        heading={[`Home and Gym`]}
        text={[
          `We can accommodate anything from at-home workouts to weight lifting at the gym.`,
        ]}
        imgRight
      />
    </div>

    <RowIcons
       icon1={{
        icon: <TbBarbell size={40} />,
        heading: [`1-On-1 Training`],
        text: [
            `Receive high-output results-based personal training services in the Philadelphia, Pennsylvania area.`
          ],
      }}
      icon2={{
        icon: <GiThreeFriends size={40} />,
        heading: [`Group Session`],
        text: [
            `Join in group events that we host or create your own. We can discuss and develop strategies to best meet your goals.`
          ],
      }}
      icon3={{
        icon: <MdOutlineComputer size={40} />,
        heading: [`Virtual Coaching`],
        text: [
            `Stay motivated and be intentional on achieving your end goals by scheduling online sessions.`
          ],
      }}
    />
   </div>
  )
}

export default Home