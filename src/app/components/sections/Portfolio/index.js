import React, { useState } from 'react'
import { PORTFOLIO } from "../../../data/Portfolio"
import { SectionTitle } from "../../elements/index"
import "./portfolio.css"
import { ProjectType } from '../../elements/index'
import { PortfolioCard } from "../../elements/index"
import { Button } from "../../elements/index"
const { title, types, items } = PORTFOLIO

function Portfolio() {
  const [selectedtype, setselectedtype] = useState("All")
  const [menu, setmenu] = useState(items)

  const filtermenu = (type) => {
    if (type === "All") return setmenu(items)
    const menus = items.filter(cure => {
      return cure.type === type
    })

    setmenu(menus)
  }
  const selectedtypes = (type) => {
    setselectedtype(type)
    filtermenu(type)
  }

  return (
    <section className='container'>

      <SectionTitle title={title} />

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

      <div className='flex justify-center items-center w-60 mx-auto pt-20' data-aos="zoom-in" data-aos-duration="800">

        <a
          target="_blank"
          href="https://github.com/morshidulrahman">
          <Button title='visit my github' />

        </a>
      </div>
    </section>
  )
}

export default Portfolio

