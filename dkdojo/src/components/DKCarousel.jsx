
import React from "react";
import Carousel from 'react-bootstrap/Carousel'; 
import dontStop from './dontStop.jpg'
import dramaticImage from './dramaticImage.JPG'
import giveAll from './giveAll.jpg'

function DKCarousel () {
return (
    <div id="carouselExampleCaptions" class="container carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src={dramaticImage} class="d-block w-100" alt="..." />
          <div class="carousel-caption  ">
            <h5>Get Ready!</h5>
            <p>Be the Best Version of Yourelf.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={dontStop} class="d-block w-100" alt="..." />
          <div class="carousel-caption  ">
            <h5>Don't Give Up!</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={giveAll} class="d-block w-100" alt="..." />
          <div class="carousel-caption  ">
            <h5>Give It Your All!</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
);
}

export default DKCarousel;