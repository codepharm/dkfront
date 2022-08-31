import React from 'react'

import gym from '../../assets/images/gym.jpg'
import weight from '../../assets/images/weights.jpg'

import styles from './Home.module.css';

const Home = () => {
  return (
   <div className={`${styles.home} text-white py-5`}>
    <div className={`px-3 my-5`}>
      <h2 className={`text-center my-5 fw-light`}>Home</h2>
      <p className={`fw-lighter`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, culpa ut. Harum delectus totam expedita hic repellat ea similique deserunt?</p>
    </div>
    <div className="bg py-5">
      <div className={`row container-fluid`}>
        <div className={`col-sm-5`}>
          <img src={gym} className={`${styles.img} p-4 img-fluid`} alt='Gym equipment in the background' />
        </div>
        <div className={`col-sm-7 m-auto py-5 px-4`}>
          <h4 className={`fw-light`}>Lorem, ipsum dolor.</h4>
          <p className={`fw-lighter`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos obcaecati voluptates quibusdam rem vitae iusto. Suscipit eos alias mollitia.</p>
        </div>
      </div>
      <div className={`row container-fluid`}>
        <div className={`col-sm-7 m-auto py-5 px-4`}>
          <h4 className={`fw-light`}>Lorem, ipsum dolor.</h4>
          <p className={`fw-lighter`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos obcaecati voluptates quibusdam rem vitae iusto. Suscipit eos alias mollitia.</p>
        </div>
        <div className={`col-sm-5`}>
          <img src={weight} className={`${styles.img} p-4 img-fluid`} alt='Gym equipment in the background' />
        </div>
      </div>
    </div>
    <div className={`${styles.bottom} container-fluid`}>
      <h4 className={`text-center my-4`}>Lorem, ipsum dolor.</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora ad dolorum odit adipisci veniam rerum debitis omnis laborum cumque.</p>
    </div>
   </div>
  )
}

export default Home