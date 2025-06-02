'use client';

import React, {useState, useRef} from 'react'
import Image from 'next/image'
import { ICONS } from '@/constants'
const RecordScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <div className='record'>
        <button className='primary-btn'>
            <Image src={ICONS.record} alt='record' width = {16} height = {16} />
            <span>Record a video</span>
        </button>
    </div>
  )
}

export default RecordScreen


