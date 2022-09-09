import React from 'react'
import { CounterData } from '../../../data/Counter'
function Counter() {

  const { counter } = CounterData
  return (
    <div className='pt-32 flex w-full flex-wrap justify-between gap-10 md:gap-0 ' data-aos="fade-up" data-aos-duration="1400">
      {
        counter?.map((item, index) => (
          <div
            key={index}
            className='flex gap-8 w-full md:w-[21%] sm:w-[40%]'>
            <p className='text-gray-200 text-4xl'>
              {item.icon}
            </p>
            <div className='dark:text-white'>
              <p className='font-bold text-3xl mb-1'>
                {item.number}
              </p>
              <span className='text-lg'>
                {item.title}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Counter