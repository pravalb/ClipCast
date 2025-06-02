import React from 'react'
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
import { getAllVideosByUser } from '@/lib/actions/video';
import { redirect } from 'next/navigation';
const page = async ({params, searchParams}: ParamsWithSearch) => {
    const { id } = await params;
    const{query, filter} = await searchParams;
    const { user, videos } = await getAllVideosByUser(id, query, filter);
    if(!user) redirect('/404');
  return (
    <div className='wrapper page'>
        <Header subHeader={user?.email}
        title={user?.name}
        userImg={user?.image ?? ""}/>
        <section className='video-grid'>
          {dummyCards.map((card) => (
            <VideoCard key={card.id} {...card} />
          ))}
        </section>
        
    </div>
  )
}

export default page 