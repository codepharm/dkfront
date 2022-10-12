import React from 'react'
import RowImages from '../../components/Rows/RowImages/RowImages';
import RowTextOnly from '../../components/Rows/RowTextOnly/RowTextOnly';
import RowImgText from '../../components/Rows/RowImgText/RowImgText';
import addBrand from '../../utils/addBrand';
import testimonial1 from '../../assets/images/testimonial1.jpg'
import testimonial2 from '../../assets/images/testimonial2.jpg'
import testimonial3 from '../../assets/images/testimonial3.jpg'
import helplifting from '../../assets/images/helplifting.jpg'
import intenselifting from '../../assets/images/intenselifting.jpg'
import seriouslifting from '../../assets/images/seriouslifting.jpg'
import weighttraining from '../../assets/images/weighttraining.jpg'
import outdoortraining1 from '../../assets/images/outdoortraining1.jpg'
import outdoortraining2 from '../../assets/images/outdoortraining2.jpg'
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <div id='page' className={`${styles.gallery} text-white py-5 container-fluid`}>
      <RowTextOnly
        heading={[addBrand(), `'s Gallery`]}
        text={[
          `Check out what others have to say about the training they received at `,
          addBrand(),
          `.`,
        ]}
        textStyles={`fs-4`}
      />

      <div className={`${styles.bg} bg py-5`}>
        <RowImgText
          img={testimonial1}
          alt={`A man doing chest fly resistance training at the gym`}
          heading={[`I wanted easy..`]}
          text={[
            `“I’m always quick to choose the easiest routine when it came to exercise thinking I am doing fine if I stay active. DK showed me I was really making it harder on myself and my body.”`
          ]}
        />

        <RowImgText
          img={testimonial2}
          alt={`A man doing bicep curls at the gym`}
          heading={[`I think I know...`]}
          text={[
            `“I find it hard to stay in shape when I feel like I’ve figured it all out. DKDojo has really changed my mentality and fitness has become a lifestyle I don’t stress about.”`
          ]}
        />

        <RowImgText
          img={testimonial3}
          alt={`A man doing bent-over rows at the gym`}
          heading={[`Count me in...`]}
          text={[
            `“I love the group sessions. They are a great way to meet and learn from others who all can inspire me to continue my journey.”`
          ]}
        />

        <RowImages
          image1={{
            img: helplifting,
            alt: `Trainer helping a member benchpress at the gym`,
          }}
          image2={{
            img: intenselifting,
            alt: `Intense man deadlifting at the gym`,
          }}
          image3={{
            img: seriouslifting,
            alt: `Serious man deadlifting at the gym`,
          }}
        />
      </div>
      <RowImages
        image1={{
          img: weighttraining,
          alt: `A man doing barbell squats at an indoor gym`,
        }}
        image2={{
          img: outdoortraining1,
          alt: `A man doing bent-over barbell rows between legs at an outdoor gym`,
        }}
        image3={{
          img: outdoortraining2,
          alt: `A man doing barbell squats at an outdoor gym`,
        }}
      />
    </div>
  )
}

export default Gallery;
