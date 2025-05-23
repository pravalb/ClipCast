import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VideoCard = ({
    id,
    title,
    thumbnail,
    createdAt,
    userImg,
    views,
    visibility,
    duration
}: VideoCardProps) => {
  return (
    <Link href = {`/video/${id}`} className="video-card">
        <Image src={thumbnail} alt="thumbnail" width={290} height={160}
        />
        <article>
            <div>
                <figure>
                    <Image src={userImg} alt="avatar" width={34} height={34} className='rounded-full aspect-square'/>
                </figure>
            </div>
        </article>
    </Link>
  )
}

export default VideoCard