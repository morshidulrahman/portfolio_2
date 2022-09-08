import React from 'react'
import { SectionTitle } from "../../elements/index"
import { BlogData } from "../../../data/Blog"
import { BlogCard } from '../../elements/index'
function Blog() {

  const { title, blogs } = BlogData

  return (
    <section className='container'>
      <SectionTitle title={title} />
      <div className='mt-20' data-aos="fade-right" data-aos-duration="1200">
        <BlogCard blogs={blogs} />
      </div>
    </section>
  )
}

export default Blog