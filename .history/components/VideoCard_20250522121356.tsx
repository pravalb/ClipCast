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
        <Image src={thumbnail} alt="thumbnail" width={290} height={160}
        />
        <article>
            <div>
                <figure>
                    <Image src={userImg} alt="avatar" width={34} height={34} className='rounded-full aspect-square'/>
                    <figcaption>
                        <h3>{username}</h3>
                        <p>{visibility}</p>
                    </figcaption>
                </figure>
            </div>
        </article>
    </Link>
  )
}

export default VideoCard