import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Ciira Posts by Redux Toolkit</h1>

        <div className="navContent">
          <div className="navLinks">
            <div className="navLinks">
              <Link to="/">Posts</Link>
            </div>
          </div>
        </div>
      </section>
    </nav>
  )
}
