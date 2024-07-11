import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import Profile from '../profile/Profile'

export const ProfilePage = () => {
  return (
    <div className='flex'> 
        <Sidebar/>
        <Profile/>
    </div>
  )
}
