import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import Social from '../social/Social'

const SocialPage = () => {
  return (
    <div className='flex w-full '>
        <Sidebar/>
       <div className='h-[100%] w-full overflow-y-auto'>
      <Social/>
       </div>
    </div>
  )
}

export default SocialPage