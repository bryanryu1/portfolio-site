import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLink from "./header-link"

const Header = () => (
  <div
    style={{
      background: `#1E7CD9`,
      padding: `1.2rem 10%`,
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      position: 'fixed',
      zIndex: '99',
      alignItems: 'center',
      
    }}
  >
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
        fontSize: "40px",
      }}
    >
      Bryan Ryu
    </Link>

    <HeaderLink />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
