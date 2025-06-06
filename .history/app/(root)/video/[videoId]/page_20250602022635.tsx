import { getVideoById } from '@/lib/actions/video';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async({params}: Params) => {
  const {videoId} = await params;

  const {user, video} = await getVideoById(videoId);

  if(!video) redirect('/404')
  return (
    <main className='wrapper page'>
        VIDEO DETAILS PAGE
    </main>
  )
}

export default page