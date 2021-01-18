import React from "react"

import Cereal from "../components/cereal"
import Water from "../components/water"
import Cooked from "../components/cooked"

const Portfolio = () => (
  <div
    style={{
      minHeight: "20rem",
    }}
  >
    <h1
      style={{
        color: "#1E7CD9",
        paddingTop: "7rem",
      }}
      className="titles"
    >
      port·fo·li·o
    </h1>

    <div className="skillsGrid">
      <div className="first-skill-area">
        <h3 className="skillHead">My Skills</h3>
        <div className="skills">
          <div className="proficiency">Proficient:</div>
          <div className="skillWrap">
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Express</li>
            </ul>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Git</li>
              <li>Node.js</li>
              <li>Sequelize</li>
            </ul>
          </div>
          <div className="proficiency">Knowledgeable:</div>
          <div className="skillWrap">
            <ul>
              <li>Ruby</li>
              <li>Gatsby</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Jasmine</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="second-skill-area">
        <h3 className="projectHead">Projects</h3>
        <div className="projectWrap">
          <div className="project">
            <a
              target="_blank"
              href="https://github.com/Rice-Krispy-Grace-Shopper/Grace-Shopper"
              rel="noreferrer"
            >
              <div className='post'>
              <Cereal />
              <h4 className="postTitle">Cereal Emporium</h4>
              <p className="postDesc">
                Cereal Emporium is an e-commerce site that doesn't actually sell any cereal...
              </p>
              </div>
            </a>
          </div>

          <div className="project">
            <a
              target="_blank"
              href="https://github.com/bryanryu1/WaterApp"
              rel="noreferrer"
            >
              <Water />
              <h4 className="postTitle">WaterMon</h4>
              <p className="postDesc">
                Watermon is a React Native mobile application which a user can track the water they intake throughout the day.
              </p>
            </a>
          </div>

          <div className="project">
            <a
              target="_blank"
              href="https://github.com/Do-Jest-While-True/cooked"
              rel="noreferrer"
            >
              <Cooked />
              <h4 className="postTitle">Cook'd</h4>
              <p className="postDesc">
                Cook'd is a mobile social media application focused on recipes. Built using React Native.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
