"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VideoCard = ({
    id,
    title,
    thumbnail,
    createdAt,
    userImg,
    username,
    views,
    visibility,
    duration
}: VideoCardProps) => {
  return (
    <Link href = {`/video/${id}`} className="video-card">
        
    </Link>
  )
}

export default VideoCard