import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] '>
<div className='flex justify-between items-center w-full px-2 2x:px-16'>
<Image/>
</div>
    </div>
  )
}

export default Navbar