import React from 'react'

const VideoDetailHeader = ({title, createdAt, userImg, username, videoId, ownerId, visibility, thumbnailUrl}: VideoDetailHeaderProps) => {
  return (
    <header className='detail-header'>
        <aside className='user-info'>
            <h1>{title}</h1>
        </aside>
    </header>
  )
}

export default VideoDetailHeader