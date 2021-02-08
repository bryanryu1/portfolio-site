import PropTypes from "prop-types"
import React, {useEffect, useState} from "react"
import HeaderLink from "./header-link"
import { IoMenu } from 'react-icons/io5'

const Header = ({}) => {
  const [isNavVisible, setNavVisibility] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible)
  }

  return (
    <header className="header-bar">
      <a href="#" className="header-title">
        Bryan Ryu
      </a>

      {(!isSmallScreen || isNavVisible) && (<HeaderLink />)}

      <button onClick={toggleNav} className='burger'>
        <IoMenu color='white' size={45}/>
      </button>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
