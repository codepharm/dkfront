import React from 'react'
import dontStop from './assets/dontStop.jpg'
import giveAll from './assets/giveAll.jpg'
import dramaticImage from './assets/dramaticImage.JPG'
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dramaticImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Get Ready!</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dontStop}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Don't Give Up!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={giveAll}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Give It Your All!</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home