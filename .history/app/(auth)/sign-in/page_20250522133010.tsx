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

        <div className='description'>
          <section>
            <figure>
              {Array.from({length: 5}).map((_, index) => (
                <Image 
                src="/assets/icons/star.svg"
                alt="star"
                width={20}
                height={20}
                key={index}
                />
              ))}
            </figure>
            <p>ClipCast makes screen recording easy. From quick walkthroughs to
              full presentations, it&apos;s fast, smooth, and shareable in seconds</p>
          </section>
        </div>
      </aside>
    </main>
  )
}

export default page