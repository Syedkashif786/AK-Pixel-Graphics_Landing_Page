// import { url } from 'inspector';
import React from 'react';
import Image from 'next/image';

import config from '../config/index.json';
import testimonialImgHealth from '../../public/assets/images/testimonial_health.png';
import testimonialImgFamsolar from '../../public/assets/images/testimonial_famsolar.png';
import testimonialImgBeezee from '../../public/assets/images/testimonial_beezee.png';
import testimonialImgPolitical from '../../public/assets/images/testimonial_political.png';
import testimonialImgResinaly from '../../public/assets/images/testimonial_resinaly.png';

const Testimonials = () => {
  const { testimonials } = config;
  const { title } = testimonials;


  return (
    <section className={`bg-background py-8`} id="testimonials">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <h1
          className={`w-full my-2 lg:text-5xl text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 mb-8`}
        >
          {title}
        </h1>



        <p className='mb-4 text-center w-full sm:5/6 text-xl text-gray-500'>Hear from our delighted clients as they share their experiences of working with us.</p>
        <div
          className={`flex md:flex-row flex-wrap gap-x-1 justify-center`}>
          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg  mt-1 `}>
            <div
              className={`flex`} >
                <Image
                  src={testimonialImgFamsolar}
                  alt="Testimonial Image Famsolar" />          
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg  mt-1 `}>
            <div
              className={`flex`}>
                <Image
                  src={testimonialImgHealth}
                  alt="testimonial Image Health" />             
            </div>
          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex`}>
              <Image
                src={testimonialImgBeezee}
                alt="testimonial Image Beezee" />
            </div>
          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1`}>
            <div
              className={`flex`}>
                <Image
                  src={testimonialImgPolitical}
                  alt="testimonial Image Political" />             
            </div>
          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1`}>
            <div
              className={`flex`}>
              <Image
                src={testimonialImgResinaly}
                alt="testimonial Image Resinaly" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


// className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}>

// className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}>

{/* <img decoding="async" loading="lazy" src="/assets/images/bgimagehealth.jpeg" alt="Valuecoders" width="385" height="80"></img> */ }