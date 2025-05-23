'use client'
import Image from 'next/image';
import React from 'react'
import { useState } from 'react'

const DropdownList = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
        <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div className="filter-trigger">
                <figure>
                    <Image src="/assets/icons/hamburger.svg" alt="menu" width={14} height={14} />
                    Most recent
                </figure>
            </div>
        </div>
    </div>
  )
}

export default DropdownList