import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import About from '../about/About'
import Social from '../social/Social'

export const AboutPage = () => {
  return (
    <div className='flex w-full'>
        <Sidebar/>
       <div className='h-[100%] w-full overflow-y-auto'>
       <About/>
       </div>
    </div>
  )
}
