import React from "react"

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
            <ul
              style={{
                // marginLeft: "10rem",
              }}
            >
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
              HELLO
            </a>
          </div>

          <div className="project">
            <a
              target="_blank"
              href="https://github.com/bryanryu1/WaterApp"
              rel="noreferrer"
            >THIS</a>
          </div>

          <div className="project">
            <a
              target="_blank"
              href="https://github.com/Do-Jest-While-True/cooked"
              rel="noreferrer"
            >IS TEST</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
