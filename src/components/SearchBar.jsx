import React from 'react'

function SearchBar() {
  return (
    <form action="#">
        <div className=''>
            <label htmlFor="search">
                <img src="/images/search-icon.svg" alt="search countries" />
            </label>
            <input type="text" id='search' placeholder='Search for a country...' />
        </div>
    </form>
  )
}

export default SearchBar