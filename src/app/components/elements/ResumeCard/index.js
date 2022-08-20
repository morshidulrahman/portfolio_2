import React from 'react'

function ResumeCard({year,educationName,description,icon}) {
  return (
    <>
         <div className='rounded-lg p-6 flex w-full gap-6 resumeCard'>
            <div className='text-3xl relative resumeIcon text-secondary-color'>
              {icon}
            </div>
            <div>
               <p className='mb-1 text-[#8D8AB3]'>{year}</p>
                <h3 className='py-2 font-bold text-xl'>{educationName}</h3>
                <p className='  leading-6 text-[#8D8AB3] dark:text-gray-200'>{description}</p>
            </div>
         </div>
    </>
  )
}

export default ResumeCard