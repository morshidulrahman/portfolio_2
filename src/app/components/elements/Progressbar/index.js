import React from 'react'

function Progressbar({color,name,parentage}) {
  return (
    <>
      <div className='mb-4'>
          <div className='flex justify-between '>
                   <p>{name}</p>
                   <span>{parentage}%</span>
               </div>
                <div className='w-full h-2 bg-[#ebebeb] rounded-full relative mt-2'>
                   <div 
                   style={{
                    backgroundColor:`${color}`,
                    width:`${parentage}%`
                   }}
                   className="absolute top-0 left-0  h-2 rounded-full ">
                   </div>
                </div>
      </div>
    </>
  )
}

export default Progressbar