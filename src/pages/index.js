import React from "react"

import Layout from "../components/layout"

import About from "./about"
import Portfolio from "./portfolio"
import Contact from "./contact"
import Home from "./home"

const IndexPage = ({}) => {
  return (
    <Layout>
      {/* ~Home~ */}
      <section className="home" id="home">
        <Home />
      </section>
      {/* ~about~ */}
      <section className="about" id={"about"}>
        <About />
      </section>
      {/* ~portolio~ */}
      <section className="portfolio" id={"portfolio"}>
        <Portfolio />
      </section>
      {/* ~contact~ */}
      <section className="contact" id="contact">
        <Contact />
      </section>
    </Layout>
  )
}

export default IndexPage
