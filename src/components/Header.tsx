import React from 'react'

const Header = () => {
  return (
    <header className='w-[1200px] h-[50px] max-w-[80%]
      m-auto flex items-center relative z-50'>
    <nav className='w-[55%] md:w-[45%] flex justify-around capitalize text-white font-bold text-lg md:text-[20px]'>
      <a href="">home</a>
      <a href="">contacts</a>
      <a href="">info</a>
    </nav>
  </header>
  )
}

export default Header