import React from 'react'
import "./SearchBar.scss"

const SearchBar = ({className=""}) => {
  return (
    <div className='search-box'>
    <i class="fa-solid fa-magnifying-glass"></i>
    <input className={`search-bar ${className}`} type="Search" />
    </div>
    )
}

export default SearchBar