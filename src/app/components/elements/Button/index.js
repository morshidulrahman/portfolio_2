import React from 'react'

function Button ({title}) {
  return (
    <div 
    className="text-white px-8 py-2 rounded-full bg-secondary-color font-bold w-fit capitalize hover:scale-90 duration-500 cursor-pointer">
       {title}
    </div>
  )
}

export default Button