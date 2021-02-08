import React from "react"
import Headshot from "../images/headshot"
import Fade from "react-reveal/Fade"

const About = () => (
  <div>
    <Fade top>
      <h1 className="titles">a·bout me</h1>
    </Fade>
    <Fade>
      <div className="aboutgrid">
        <div className="headshot">
          <Headshot />
        </div>
        <div className="bio">
          <p className="bioText">
            I am a recent college graduate from Rutgers University, New
            Brunswick where I studied Philosophy and Psychology. Coding was
            something that I always thought was fascinating so I decided to
            enroll in FullStack Academy. Making the initial career jump over to
            tech was terrifying but now I love it and I couldn’t be happier.
          </p>
          <br></br>
          <p className="bioText">
            When I'm not at my computer working on code, I still like to spend
            my time making things. I am passionate about creating and
            learning/experimenting with new techniques. I think that the hobbies
            that I enjoy, such as photography, cooking, and brewing beer, all
            reflect this quality about me.{" "}
          </p>
        </div>
      </div>
    </Fade>
  </div>
)

export default About
