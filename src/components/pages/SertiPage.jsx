import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import Sertifikat from '../sertifikat/Sertifikat'

export const SertiPage = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Sertifikat/>
    </div>
  )
}
