import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='center-all'>
        <div>
            <span>logo</span>
        </div>
        <div>
            <ul>
                <li><Link to="/"></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar