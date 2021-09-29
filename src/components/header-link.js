import { Link } from "gatsby"
import React from "react"
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const HeaderLink = () => (
  <nav
    className='nav'
  >
    <ScrollLink
      to='#'
      className='header-item'
      >
        home
    </ScrollLink>
    <ScrollLink
      to="/#about"
      className='header-item'
    >
      about
    </ScrollLink>
    <ScrollLink
      to="/#portfolio"
      className='header-item'
    >
      portfolio
    </ScrollLink>
    <ScrollLink
      to="/#contact"
      className='header-item'
    >
      contact
    </ScrollLink>
  </nav>
)

export default HeaderLink
