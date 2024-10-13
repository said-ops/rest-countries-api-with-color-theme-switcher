import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import SearchBar from './SearchBar'

function App() {
  return (
   <>
     <Navbar/>
     <SearchBar/>
     {/* cards wrapper */}
     <div className='grid p-16 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center grid-cols-1 gap-8'> 
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     </div>
   </>
  )
}

export default App