import React from 'react'
import Header from '@/components/Header';
const page = async ({params}: ParamsWithSearch) => {
    const { id } = await params;
  return (
    <div className='text-2xl font-karla'>
        <Header subHeader="tribbiani@gmail.com" title="Joey" userImg="/assets/images/dummy.jpg"/>
        <h1 className='text-2xl font-karla'>USER ID: {id}</h1>
    </div>
  )
}

export default page