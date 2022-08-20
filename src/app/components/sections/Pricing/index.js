import React from 'react'
import {SectionTitle} from "../../elements/index"
import {PRICINGDATA} from "../../../data/Pricing"
import {PricingCard} from "../../elements/index"

function Pricing() {
   const{pricingData,title}=PRICINGDATA
  return (
    <section id="pricing" className='container pt-40'>
      <div>
         <SectionTitle title={title}/>
      </div>
       <div className='mt-20 flex gap-4 w-full flex-wrap justify-center md:justify-start'>
        {
         pricingData?.map((item,index)=>(
           <PricingCard
           key={index}
           {...item}
           />
         ))
        }
       </div>
    </section>
  )
}

export default Pricing