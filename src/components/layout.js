import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* ~header~ */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      {/* ~body~ */}
      <div
        style={{
          margin: `0 auto`,
          paddingTop: "50px",
        }}
      >
        <main>{children}</main>
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
