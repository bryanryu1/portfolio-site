import React from "react"
import Headshot from "../components/headshot"

const About = () => (
  <div>
    <h1
      style={{
        color: "#1E7CD9",
        paddingTop: "7rem",
        paddingBottom: '4rem',
      }}
      className='titles'
    >
      a·bout me
    </h1>
    <div className="aboutgrid">
      <div className="headshot">
        <Headshot />
      </div>
      <div className="bio">
        <p>
          I am a recent college graduate from Rutgers University, New Brunswick
          where I studied Philosophy and Psychology. Coding was something that I
          always thought was fascinating so I decided to enroll in FullStack
          Academy. Making the initial career jump over to tech was terrifying
          but now I love it and I couldn’t be happier.
        </p>
        <br></br>
        <p>
          When I'm not at my computer working on code, I still like to spend my
          time making things. I am passionate about creating and
          learning/experimenting with new techniques. I think that the hobbies
          that I enjoy, such as photography, cooking, and brewing beer, all
          reflect this quality about me.{" "}
        </p>
      </div>
    </div>
  </div>
)

export default About