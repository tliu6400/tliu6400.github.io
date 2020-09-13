import React from "react";

// reactstrap components
import { Container, Progress, Row, Col, Badge } from "reactstrap";

// core components
const programming = [
  { language: "Python", percent: "100" },
  { language: "Java", percent: "100" },
  { language: "Swift (SwiftUI)", percent: "80" },
  { language: "MATLAB", percent: "75" },
  { language: "SQL", percent: "70" },
  { language: "JavaScript", percent: "70" },
  { language: "HTML/CSS", percent: "60" },
  { language: "C", percent: "50" },
];
const tools = [
  "Git",
  "TensorFlow",
  "OpenCV",
  "Numpy",
  "Pandas",
  "Sklearn",
  "StatsModels",
  "MongoDB",
  "Firebase",
  "ExpressJS",
  "Flask",
  "React",
  "Angular",
  "AngularJS",
  "NodeJS",
  "Bootstrap",
  "Figma",
  "Power BI",
  "Adobe Premiere Pro",
];

const languages = ["English", "Chinese", "Spanish"];

function Skills() {
  return (
    <>
      <div className="section" id="skills">
        <Container>
          <h2 className="title">Skills</h2>
          <p>Relative to Python and Java</p>
          <div>
            <Row>
              {programming.map((obj, i) => (
                <Col md="6" key={i} style={{ paddingBottom: "48px" }}>
                  <div className="progress-container progress-info">
                    <span className="progress-badge">{obj.language}</span>
                    <Progress max="100" value={obj.percent}>
                      <span className="progress-value">{obj.percent}%</span>
                    </Progress>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                {tools.map((tool, i) => (
                  <Badge color="info" key={i} className="mr-1">
                    {tool}
                  </Badge>
                ))}
                {languages.map((language, i) => (
                  <Badge color="default" key={i} className="mr-1">
                    {language}
                  </Badge>
                ))}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Skills;
