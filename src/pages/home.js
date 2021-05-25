import React, { useLayoutEffect, useState } from "react"
import { Link } from "gatsby"
import Typist from "react-typist"

function useWindowSize() {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}

const Home = () => {
  const [width, height] = useWindowSize()

  return (
    <div
      style={{
        paddingTop: "1rem",
        color: "white",
        textShadow: "1px 1px 1px black",
        height: height,
        // width: width,
      }}
    >
      <Typist>
        <h1
          style={{
            color: "#ffffff",
          }}
        >
          Hello, I'm Bryan.
        </h1>
        <Typist.Delay ms={900} />
        <p>I am a Fullstack Software Engineer and Philosopher.</p>
        <p>
          While you're here, you can read information{" "}
          <Link className="home-text" to="/#about">
            about me
          </Link>
        </p>
        <p>
          Check out the projects in my{" "}
          <Link className="home-text" to="/#portfolio">
            portfolio
          </Link>
        </p>
        <p>
          Or read things I've written{" "}
          <a
            className="home-text"
            target="_blank"
            href="https://bryanryu.medium.com/"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>...</p>
        <Typist.Delay ms={900} />
        <p>Please, stay a while and take a look around!</p>
      </Typist>
    </div>
  )
}

export default Home
