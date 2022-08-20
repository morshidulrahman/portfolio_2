import React from 'react'
import SectionTitle from '../../elements/SectionTitle'
import { AboutData } from '../../../data/About'
import Button from '../../elements/Button'
import Progressbar from '../../elements/Progressbar'
import  './About.css'
import Counter from './Counter'

function About() {
    
   const{bio,btnbio,title,Skils,image}=AboutData

  return (
    <section  className='container'  >
      <div className='mb-10'>
           <SectionTitle title={title}/>
      </div>
      <div className='flex justify-between text-[#454360] pt-8 flex-col md:flex-row gap-10 md:gap-0 w-full'>
         <div className='w-40 h-40 overflow-hidden mx-auto md:mx-0'>
          <img src={image} alt="me" className='w-full h-full'/>
         </div>
         <div className='shadow-xl rounded-xl py-8 px-8 flex md:w-3/4  w-full justify-between bg-white relative about_after md:flex-row flex-col gap-6 md:gap-0 dark:bg-bg-dark dark:text-white'>
          <div className=' w-full md:w-2/5'>
              <p className='mb-6 text-left leading-7'>
                {bio}
              </p>
              <Button title={btnbio}/>
          </div>
          <div className=' w-full md:w-1/2 p-2'>
             {
              Skils?.map((item,index)=>(
                <Progressbar key={index} {...item}/>
              ))
             }
          </div>
         </div>
      </div>
       <Counter/>
    </section>
  )
}

export default About