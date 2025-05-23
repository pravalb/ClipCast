import React from 'react'
import Header from '@/components/Header';
const page = async ({params}: ParamsWithSearch) => {
    const { id } = await params;
  return (
    <div className='text-2xl font-karla'>
        <Header subHeader="tribbiani@gmail.com" title="Joey" userImg="/assets/images/dummy.jpg"/>
        USER ID: {id}
    </div>
  )
}

export default page