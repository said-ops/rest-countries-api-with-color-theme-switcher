import React from 'react'
// https://flagcdn.com/w320/ga.png

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-4 px-16 shadow-md'>
        <h1 className='text-2xl font-bold'>Where in the world?</h1>
        <div className='flex gap-2 p-2'>
            <img src="/images/icon-moon.svg" alt="Dark theme" />
            <span>Dark Mode</span>
        </div>
    </nav>
  )
}

export default Navbar