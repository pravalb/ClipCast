import React from 'react'
import Image from 'next/image'

const Header = ({ subHeader, title, userImg}: SharedHeaderProps) => {
  return (
    <header className='header'>
        <section className='header-container'>
            <div className='details'>
                {userImg && (
                    <Image src = {userImg || '/assets/images/dummy.jpg'} alt='user' width={66} height={66} className='rounded-full' />
                )}
            </div>
        </section>
    </header>
  )
}

export default Header