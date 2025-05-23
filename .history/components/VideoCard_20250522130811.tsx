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
        <Image src={thumbnail} alt="thumbnail" width={290} height={160} className="thumbnail" />
        
    </Link>
  )
}

export default VideoCard