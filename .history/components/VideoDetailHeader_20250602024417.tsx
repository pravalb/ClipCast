import Image from 'next/image'
import React from 'react'

const VideoDetailHeader = ({title, createdAt, userImg, username, videoId, ownerId, visibility, thumbnailUrl}: VideoDetailHeaderProps) => {
  return (
    <header className='detail-header'>
        <aside className='user-info'>
            <h1>{title}</h1>
            <figure>
                <button>
                    <Image src={userImg || ''} alt="User" width={24} height={24} className='rounded-full' />
                </button>
            </figure>
        </aside>
    </header>
  )
}

export default VideoDetailHeader