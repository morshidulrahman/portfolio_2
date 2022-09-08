import React from 'react'
import { TestimonialData } from "../../../data/Testimonial"
import { SectionTitle } from "../../elements/index"
import { TestimonialCard } from "../../elements/index"
import "./index.css"
function Testimonial() {
  const { title, testimonial } = TestimonialData
  return (
    <section className='container'>
      <SectionTitle title={title} />
      <div className='mt-20' data-aos="fade-up" data-aos-duration="1100">
        <TestimonialCard testimonial={testimonial} />
      </div>
      {/* <div className='flex flex-wrap items-center justify-between gap-10 mt-14 w-full mx-auto'>
           {
            images.map((item,index)=>(
              <div 
              key={index}
              className=' w-[40%] md:w-[22%] flex items-center justify-center'>
                  <img
                  
                  src={item.image} 
                  alt="client" />
              </div>
            ))
           }
         </div> */}
    </section>
  )
}

export default Testimonial