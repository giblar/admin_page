import React from 'react'

export const INP = (props) => {
    const {value, onChange, placeholder} = props
  return (
    <input type="text" placeholder={placeholder} value={value} onChange={onChange} className='border p-2 mb-2 bg-gray-700 rounded-lg'/>
  )
}
