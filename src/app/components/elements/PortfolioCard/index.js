import React from 'react'

function PortfolioCard({ menu, selectedtype }) {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-between w-full gap-10 md:gap-6">
      {
        menu.map((item, index) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={item.link}
            key={index}
            className="bg-white shadow-md rounded-xl relative overflow-hidden w-[80%] md:w-[31%] category"
            data-aos="fade-right" data-aos-duration="1200"
          >
            <div className='w-full h-[30%] overflow-hidden'>
              <img
                className='object-fit w-full h-[300px]'
                src={item.image}
                alt="me" />
            </div>
            <div className='bg-[#7b7be8e1] absolute top-0 left-0 w-full h-full hoverbg opacity-0 duration-500'></div>
            <span
              className='absolute top-0 left-4 text-white bg-[#FF4C60] px-1 py-1 rounded-b-xl category_type duration-500 -translate-y-10'
            >{item.type}</span>
            <p
              className='absolute top-16 left-5 text-white text-xl font-bold capitalize category_title translate-y-10 opacity-0 duration-500'
            >{item.title}</p>
            <p
              className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white absolute bottom-10 left-8  hoverIcon opacity-0 duration-500'
            >{item.icon}</p>
          </a>
        ))
      }
    </div>
  )
}

export default PortfolioCard