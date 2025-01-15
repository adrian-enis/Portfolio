import React from 'react'

const Header = () => {
  return (
    <header className='w-[1200px] h-[50px] max-w-[80%]
      m-auto flex items-center relative z-50'>
    <nav className='w-[80%] md:w-[45%] flex justify-around capitalize text-white font-bold text-lg '>
      <a href="">home</a>
      <a href="">About Me</a>
      <a href="">Works</a>
    </nav>
  </header>
  )
}

export default Header