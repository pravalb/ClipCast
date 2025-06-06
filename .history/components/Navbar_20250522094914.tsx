import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const user = {};
const Navbar = () => {
  return (
    <header className='navbar'>
        <nav>
            <Link href='/'>
            <Image src = '/assets/icons/logo.svg' alt ='Logo' width={32} height={32}/>
            <h1>ClipCast</h1>
            </Link>
            {user && (
                <figure>
                    <button>
                        <Image src="/assets/images/dummy.jpg" alt="User" width={36} height = {36} className='rounded-full aspect-square'/>
                    </button>
                </figure>
            )}
        </nav>
    </header>
  )
}

export default Navbar