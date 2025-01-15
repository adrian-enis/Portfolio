import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-[1200px] h-[50px] max-w-[80%]
      m-auto flex items-center relative z-50'>
    <nav className='w-[80%] md:w-[45%] flex justify-around capitalize text-white font-bold text-lg '>
      <Link to="/">Home</Link>
      <Link to="/aboutme">About me</Link>
      <Link to="/works">Works</Link>
    </nav>
  </header>
  )
}

export default Header