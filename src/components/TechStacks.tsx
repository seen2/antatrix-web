import React from 'react'
import TechCard from './TechCard'

export default function TechStacks() {
  return (
    <div className='pb-20 bg-dark text-light ' >
        <h1 className='d-flex justify-content-center'>
        <u>Tech-Stacks</u>
        </h1>
        <div className=' d-flex bg-dark text-light flex-row  justify-content-around flex-wrap'>

        <TechCard title='Web Development' />
        <TechCard title='Native App Development' />
        <TechCard title='Web and Mobile App' />
        <TechCard title='WordPress Development'/>

        </div>

    </div>
  )
}
