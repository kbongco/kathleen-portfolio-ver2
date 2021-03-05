import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='sidenav'>
      <Link>
        Home
      </Link>
      <Link>
        About me
      </Link>
      <Link>
        Projects
      </Link>
      <Link>
        Blog Posts
      </Link>
      <Link>
        Contact me!
      </Link>
    </div>
  )
}