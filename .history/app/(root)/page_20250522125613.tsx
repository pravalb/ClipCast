import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'
import { dummyCards } from '@/constants'

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title="All Videos" subHeader='Public Library'/>
      {dummyCards.map((card) => (
        <VideoCard key={card.id} {...card} />
      ))}
    </main>
  )
}

export default Page