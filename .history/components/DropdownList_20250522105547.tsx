'use client'
import React from 'react'
import { useState } from 'react'

const DropdownList = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
        <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>

        </div>
    </div>
  )
}

export default DropdownList