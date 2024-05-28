import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import SearchBar from './SearchBar'
import IconComp from './IconComp'

const Navbar = () => {
  return (
    <div className='between-all nav'>
        <div>
            <Link className='nav-logo' to="/">Myntra</Link>
        </div>
        <div>
            <ul className='nav-parent'>
                <li><Link className='link-tag' to="/">Men</Link></li>
                <li><Link className='link-tag' to="/">Women</Link></li>
                <li><Link className='link-tag' to="/">Kids</Link></li>
                <li><Link className='link-tag' to="/">fashion</Link></li>
                <li><Link className='link-tag' to="/">Studio</Link></li>
                <li><Link className='link-tag' to="/">Arrival</Link></li>
        
            </ul>
        </div>
        <div>
            <SearchBar />
        </div>
        <div className='center-all gap-20'>
            <IconComp icon={<i class="fa-regular fa-user"></i>} data="Profile" />
            <IconComp icon={<i class="fa-regular fa-heart"></i>} data="Whislist" />
            <IconComp icon={<i class="fa-solid fa-bag-shopping"></i>} data="Bag" />
    
        </div>
    </div>
  )
}

export default Navbar