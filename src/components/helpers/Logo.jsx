import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <Router>
        <h1 className='logo-text-desktop'>
          <Link to="/">
            JUANEQUEX
          </Link>
        </h1>

        <h1 className='logo-text-small'>
          <Link to='/'>
            Juanequex
          </Link>
        </h1>
      </Router>
    </>
  )
}

export default Logo
