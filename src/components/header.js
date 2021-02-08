import PropTypes from "prop-types"
import React, {useState} from "react"
import HeaderLink from "./header-link"
import { IoMenu } from 'react-icons/io5'

const Header = ({}) => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
  }

  return (
    <header className="header-bar">
      <a href="#" className="header-title">
        Bryan Ryu
      </a>

      {isNavVisible && (<HeaderLink />)}

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
