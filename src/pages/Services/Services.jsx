import React from 'react'
import { TbBarbell } from 'react-icons/tb';
import { MdOutlineComputer } from 'react-icons/md';
import { GiThreeFriends } from 'react-icons/gi';
import RowIcons from '../../components/Rows/RowIcons/RowIcons';
import RowImgText from '../../components/Rows/RowImgText/RowImgText';
import RowTextOnly from '../../components/Rows/RowTextOnly/RowTextOnly';
import addBrand from '../../utils/addBrand';
import weight from '../../assets/images/weights.jpg'
import overshoulders from '../../assets/images/overshoulders.jpg'
import smallweightsband from '../../assets/images/smallweightsband.jpg'
import styles from './Services.module.css';

const Services = () => {
  return (
    <div id='page' className={`${styles.services} text-white py-5 container-fluid`}>
      <RowTextOnly
        heading={[addBrand(), ` Training Grounds`]}
        text={[
          `The process begins with getting to know who you are, what your current lifestyle is like, and what schedule best works for you. 
        We talk about your desires, needs, and goals (both short-term and long-term). 
        Most importantly, we want to know what motivates you and what you are most passionate about. `,
          addBrand(),
          ` will work hard to hold onto those ambitions to keep you going.`,
        ]}
        textStyles={`fs-4`}
      />

      <div className={`${styles.bg} bg py-5`}>
        <RowImgText
          img={smallweightsband}
          alt={`Small weights and resistant band on wooden floor`}
          heading={[`Beginner: Stay Focused`]}
          text={[
            <ul>
              <li>Getting started, you must first become familiar with fitness.</li>
              <li>Learn body weight, the practical mechanics of pushing and pulling, and basic movements.</li>
              <li>Utilize simple items such as a bath towel, stretchy resistant bands, and at-home equipment.</li>
              <li>Training will consist of high rep count instead of weighted training.</li>
            </ul>,
            `Establishing the workout routine tailored to you is the easy part. 
            The hard part is conquering your mind and diminishing the fears that hold you back. Stay focused and in control.`
          ]}
        />

        <RowImgText
          img={weight}
          alt={`Gym equipment in the background`}
          heading={[`Intermediate: Stay Disciplined`]}
          text={[
            <ul>
              <li>Learn and master proper form.</li>
              <li>Introduction to the gym – create a proper gym routine instead of walking in confused about where to start.</li>
              <li>Strategize on how you want to split your days and schedule days off between workouts.</li>
              <li>Figure out how much weight you should be lifting. Are you looking for tone or muscle mass?</li>
              <li>Gain knowledge on how to design your own workout routine down the line.</li>
            </ul>,
            `Shock your muscle into growth. Stay disciplined in power, strength, and endurance.`
          ]}
          imgRight
        />

        <RowImgText
          img={overshoulders}
          alt={`A woman doing barbell squats in front of a mirror`}
          heading={[`Advanced: Unleash the Beast`]}
          text={[
            <ul>
              <li>Determine how far you are willing to push yourself. There are no limits to what you can push or pull. The limits that exist are the ones you set on yourself. You are pushing boundaries, constantly looking to beat your PR (personal record) and pushing weight you never imagined you would.</li>
              <li>Be one with the machine and one with the iron.</li>
              <li>Control your animalistic strength. Anyone can let loose, but it takes a strong individual to utilize that ferocity as fuel for strength.</li>
            </ul>,
            `The beast inside has now emerged outside in body and spirit. You are doing countless number of sets, twice-daily training, and working multiple muscle groups several times a week. You've trained your heart to pump blood and oxygen to your cells more efficiently. All your major muscles developed to the point where you are as immense as the beast you felt inside.`
          ]}
        />

      </div>

      <RowIcons
        icon1={{
          icon: <TbBarbell size={40} />,
          heading: [`1-On-1 Training`],
          text: [
            <p>
              <span>Receive high-output results-based personal training services in the Philadelphia, Pennsylvania area.</span>
              <br />
              <span> Rate: $40 per hour</span>
            </p>

          ],
        }}
        icon2={{
          icon: <GiThreeFriends size={40} />,
          heading: [`Group Session`],
          text: [
            <p>
              <span>Join in group events that we host or create your own. We can discuss and develop strategies to best meet your goals.</span>
              <br />
              <span>Rate: $20 per person</span>
            </p>

          ],
        }}
        icon3={{
          icon: <MdOutlineComputer size={40} />,
          heading: [`Virtual Coaching`],
          text: [
            <p>
              <span>Stay motivated and be intentional on achieving your end goals by scheduling online sessions.</span>
              <br />
              <span>Rate: $30 per hour</span>
              <br />
              <span> (Beginner and Intermediate only)</span>
            </p>
          ],
        }}
      />
    </div>
  )
}

export default Services;
