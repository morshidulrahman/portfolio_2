import React from 'react'

function Service({color,textColor,description,title,image}) {
  return (
    <>
    <div
           style={{
            backgroundColor:`${color}`,
            color:`${textColor}`
           }}
           className='md:w-[30%] w-full p-6 rounded-lg hover:-translate-y-3 duration-500'> 
               <img
               className='mx-auto mb-5'
               src={image}
               alt={title} />
               <h3 className='text-center mb-4 font-bold text-2xl'>{title}</h3>
               <p className='text-center mb-4 '>{description}</p>
           </div>
    </>
  )
}

export default Service