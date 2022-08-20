import React from 'react'
import Button from '../Button'

function PricingCard({image,title,desc,date,support,carddata,btnbio,spandata}) {
  return (
    <>
         <div className='bg-white rounded-lg shadow-md md:w-[45%] lg:w-[31%] p-6 w-[90%] relative overflow-hidden dark:bg-bg-dark'>
    <div className={`absolute top-14 left-1 rounded-l-lg  bg-[#6C6CE5] text-white -rotate-90 px-3  ${carddata && "visible"}`}>
        {carddata}
    </div>
   <img 
   className='mx-auto'
   src={image} 
   alt={title} />
    <h3
     className='my-6 font-bold text-center text-2xl'
    >{title}</h3>
    <p className='text-text-gray-color text-center mb-5 dark:text-white'>{desc}</p>
    <span className='text-text-gray-color pb-6 block text-center dark:text-white'>{support}</span>
     <div className='flex relative w-fit mx-auto mb-8'>
       <span className='font-bold mr-1'>$</span>
        <p className='font-bold text-4xl'>{date}</p>
        <span className={`absolute bottom-0 left-16 ${spandata && "left-12"}`}>Month</span>
     </div>
     <div className='flex w-full justify-center items-center'>
     <Button title={btnbio}/>
     </div>
</div>
    </>

  )
}

export default PricingCard