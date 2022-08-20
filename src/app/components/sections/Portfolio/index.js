import React, { useState } from 'react'
import {PORTFOLIO} from "../../../data/Portfolio"
import {SectionTitle} from "../../elements/index"
import "./portfolio.css"
import{ ProjectType }from '../../elements/index'
import {PortfolioCard} from "../../elements/index"

const {title,types,items} =PORTFOLIO

function Portfolio() {
    const[selectedtype,setselectedtype]=useState("All")
    const[menu,setmenu]=useState(items)

     const filtermenu=(type)=>{
          if(type==="All") return setmenu(items)
          const menus=items.filter(cure=>{   
            return cure.type===type
        })
         
          setmenu(menus)    
     } 
      const selectedtypes=(type)=>{
        setselectedtype(type)
        filtermenu(type)
      }
   
  return (
    <section className='container'>
      
      <SectionTitle title={title}/>

        {/* ==========projectType==========  */}

        <ProjectType
         types={types}
         selectedtype={selectedtype}
         selectedtypes={selectedtypes}
        />

        {/* portfolio card */}
        
        <PortfolioCard
         menu={menu}
        />

    </section>
  )
}

export default Portfolio

 