import React, { useEffect } from "react"

import Layout from "../components/layout"

import About from "./about"
import Portfolio from "./portfolio"
import Contact from "./contact"
import Home from "./home"

const IndexPage = ({}) => {
  useEffect(() => {
    let mainNavLinks = document.querySelectorAll("nav ul li a");
    let mainSections = document.querySelectorAll("main section");
    
    let lastId;
    let cur = [];
    
    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;
    
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
    
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    });
  }, [])

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
