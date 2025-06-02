import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'
import { dummyCards } from '@/constants'
import { getAllVideos } from "@/lib/actions/video"

const Page = async ({searchParams}: SearchParams) => {
  const {query, filter, page} = await searchParams;

  const {videos, pagination } = await getAllVideos(query, filter, Number(page) || 1);

  return (

    <main className='wrapper page'>
      <Header title="All Videos" subHeader='Public Library'/>
      {videos.length > 2 ? (
        <section className='video-grid'>
          {videos[0].video.title}
        </section>
      ) : (
        <div>EMPTY</div>
      )}
    </main>
  )
}

export default Page