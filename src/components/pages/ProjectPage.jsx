import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import Project from '../project/Project'

export const ProjectPage = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Project/>
    </div>
  )
}
