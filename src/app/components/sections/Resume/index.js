import React from 'react'
import { SectionTitle } from "../../elements/index"
import { RESUME } from '../../../data/Resume'
import { ResumeCard } from "../../elements/index"
import "./Resume.css"
function Resume() {
  const { title, education, icon, experince, icons } = RESUME
  return (
    <section className='container'>
      <div>
        <SectionTitle title={title} />
      </div>
      <div className='flex flex-wrap gap-4 justify-between w-full'>
        <div className='bg-white md:w-[48%] w-full rounded-lg shadow-xl dark:bg-bg-dark dark:text-white' data-aos="fade-right" data-aos-duration="1500">
          {
            education.map((item, index) => (
              <ResumeCard key={index} {...item} icon={icon} />
            ))
          }
        </div>
        <div className='bg-white md:w-[48%] w-full rounded-lg shadow-xl dark:bg-bg-dark dark:text-white' data-aos="fade-right" data-aos-duration="1000">
          {
            experince.map((item, index) => (
              <ResumeCard key={index} {...item} icon={icons} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Resume