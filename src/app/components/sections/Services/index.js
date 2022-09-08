import React from 'react'
import { SectionTitle } from "../../elements/index"
import { ServiceData } from "../../../data/Services"
import Service from '../../elements/Services'

function Services() {

  const { services } = ServiceData

  return (
    <section className='container' >
      <div >
        <SectionTitle title='services' />
      </div>
      <div className=' w-full flex flex-wrap items-center md:justify-start pt-8 gap-10 justify-between' data-aos="fade-right" data-aos-duration="1100">
        {
          services.map((item, index) => (
            <Service key={index} {...item} />
          ))
        }
      </div>
      <p className='text-center text-md pt-16 dark:text-white'>
        Looking for a custom job? <span className='text-[#FF4C60] duration-300 hover:text-[#454360] dark:hover:text-white'>Click here</span> to contact me! 👋
      </p>
    </section>
  )
}

export default Services