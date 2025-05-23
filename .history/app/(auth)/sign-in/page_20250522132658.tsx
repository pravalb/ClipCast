import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href="/">
        <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32} />
        <h1>ClipCast</h1>
        </Link>

      </aside>
    </main>
  )
}

export default page