import React from "react"
import Fade from "react-reveal/Fade"

import Image from "../components/image"
import LinkedIn from "../components/linkedIn"
import Gmail from "../components/gmail"

const Contact = () => (
  <div
    style={{
      minHeight: "20rem",
      paddingTop: "2rem",
      paddingBottom: "3rem",
    }}
  >
    <Fade top>
      <h1 className="titles">con·tact</h1>
    </Fade>
    <Fade>
      <div className="contactText">
        I'd love to link!
        <br></br>
        You can contact me at any of the channels below.
      </div>
    </Fade>
    <Fade>
      <div className="contactLinks">
        <a target="_blank" href="https://github.com/bryanryu1" rel="noreferrer">
          <Image />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/bryan-ryu/"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bryanryu1@gmail.com&su=Hello!"
          rel="noreferrer"
        >
          <Gmail />
        </a>
      </div>
    </Fade>
  </div>
)

export default Contact
