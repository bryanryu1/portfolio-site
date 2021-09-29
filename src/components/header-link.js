import { Link } from "gatsby"
import React from "react"

const HeaderLink = () => (
  <nav className="nav">
    <Link to="#" className="header-item">
      home
    </Link>
    <Link to="/#about" className="header-item">
      about
    </Link>
    <Link to="/#portfolio" className="header-item">
      portfolio
    </Link>
    <Link to="/#contact" className="header-item">
      contact
    </Link>
  </nav>
)

export default HeaderLink
