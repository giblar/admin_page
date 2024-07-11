import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import Stack from '../stack/Stack'

export const StackPage = () => {
  return (
    <div className='w-full flex'>
      <Sidebar/>
      <Stack/>
    </div>
  )
}
