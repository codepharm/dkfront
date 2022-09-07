import React from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';
import { FaPoop, FaPiggyBank } from 'react-icons/fa';
import { GiArmoredPants } from 'react-icons/gi';
import { TbBarbell } from 'react-icons/tb';
import addBrand from '../../utils/addBrand';
import gym from '../../assets/images/gym.jpg'
import weight from '../../assets/images/weights.jpg'

import styles from './Gallery.module.css';

const Gallery = () => {
  return (
   <div className={`${styles.gallery} text-white py-5`}>
    <div className={`${styles.intro} mx-auto text-center px-3`}>
      <h2 className={`my-5 fw-light`}>{addBrand()} Gallery </h2>
      <h4 className={`fw-lighter`}>The things you own end up owning you. It's at only after you lose everything that you're free to do anything at {addBrand()} .</h4>
    </div>
    <div className={`${styles.row} row text-center my-5`}>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        <FaPiggyBank size={40} />
        <h5>Not Your Job</h5>
        <p className='fw-lighter'>The first rule of {addBrand()} is, "you do not talk about DK Dojo." Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio tenetur, obcaecati perspiciatis quos.</p>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        <GiArmoredPants size={40} />
        <h5>Not Your Pants</h5>
        <p className='fw-lighter'>The second rule of {addBrand()} is, "you DO NOT talk about DK Dojo." Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!</p>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        <FaPoop size={40} />
        <h5>Just Poop</h5>
        <p className='fw-lighter'>The third rule of {addBrand()}, "if anyone yells stop, goes limp, or taps out, the training session is over. No refunds. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div className={`${styles.bg} bg py-5`}>
      <div className={`${styles.row} row container-fluid`}>
        <div className={`col-sm-5`}>
          <img src={gym} className={`${styles.img} p-4 img-fluid`} alt='Gym equipment in the background' />
        </div>
        <div className={`col-sm-7 m-auto py-5 px-4`}>
          <h4 className={`fw-light`}>Lorem, ipsum dolor.</h4>
          <p className={`fw-lighter`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos obcaecati voluptates quibusdam rem vitae iusto. Suscipit eos alias mollitia.</p>
        </div>
      </div>
      <div className={`${styles.row} row container-fluid`}>
        <div className={`col-sm-7 m-auto py-5 px-4`}>
          <h4 className={`fw-light`}>Lorem, ipsum dolor.</h4>
          <p className={`fw-lighter`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos obcaecati voluptates quibusdam rem vitae iusto. Suscipit eos alias mollitia.</p>
        </div>
        <div className={`col-sm-5`}>
          <img src={weight} className={`${styles.img} p-4 img-fluid`} alt='Gym equipment in the background' />
        </div>
      </div>
    </div>
    <div className={`${styles.row} row text-center my-5`}>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        <TbBarbell size={40} />
        <h5>Best Equipment</h5>
        <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!</p>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        <AiOutlineDollarCircle size={40} />
        <h5>Cost Effective</h5>
        <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!</p>
      </div>
      <div className={`${styles.col} col-sm-6 col-md-4`}>
        <BsTrophy size={40} />
        <h5>Reach Your Goals</h5>
        <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores architecto odio dignissimos voluptates veritatis perferendis facilis dolorum beatae non!</p>
      </div>
    </div>
    <div className={`${styles.bottom} container-fluid`}>
      <h4 className={`text-center my-4 fw-light`}>Join the Dojo TODAY!</h4>
      <p className={`fw-lighter`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora ad dolorum odit adipisci veniam rerum debitis omnis laborum cumque.</p>
    </div>
   </div>
  )
}

export default Gallery