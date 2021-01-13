import { Link } from "gatsby"
import React from "react"

const HeaderLink = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "40%",
      justifySelf: "flex-end",
    }}
  >
    <Link
      to='#'
      className='header-item'
      >
        home
    </Link>
    <Link
      to="/#about"
      className='header-item'
    >
      about
    </Link>
    <Link
      to="/#portfolio"
      className='header-item'
    >
      portfolio
    </Link>
    <Link
      to="/#contact"
      className='header-item'
    >
      contact
    </Link>
  </div>
)

export default HeaderLink
