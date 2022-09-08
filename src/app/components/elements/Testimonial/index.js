import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function TestimonialCard({ testimonial }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      grabCursor={true}
      className=' w-10/12 md:w-1/2 mx-auto' >
      {
        testimonial?.map((item, index) => (
          <SwiperSlide className='text-center' key={index} >
            <div className='w-28 mx-auto mb-5'>
              <img src={item.image} alt="d" />
            </div>
            <h3 className='font-bold text-lg mb-1'>{item.name}</h3>
            <p className='text-text-gray-color mb-6 dark:text-gray-200'>{item.subtitle}</p>
            <div className='bg-white rounded-xl shadow-md p-5 relative mb-14 dark:bg-bg-dark dark:text-white'>
              {item.desc}
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default TestimonialCard