import React from "react"
import Image from "../components/image"
import LinkedIn from "../components/linkedIn"
import Gmail from "../components/gmail"

const Contact = () => (
  <div style={{
    minHeight: '20rem',
    paddingTop: '2rem',
    paddingBottom: '3rem',
  }}>
    <h1
      style={{
        color: "#1E7CD9",
      }}
      className='titles'
    >
      con·tact
    </h1>
    <p
    style={{paddingTop: '1.5rem', paddingBottom: '2.5rem'}}>
      I'd love to link!
      <br></br>
      You can contact me at any of the channels below.
    </p>
  
  <div
    style={{
      justifyContent: "space-evenly",
      display: "flex",
      alignItems: 'center',
      paddingBottom: '10rem'
    }}
  >
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
  </div>
)

export default Contact
