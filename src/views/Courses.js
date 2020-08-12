import React from "react";

// reactstrap components
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

// core components
const titles = [
  "This Fall",
  "Computer Science",
  "Mathematics",
  "Other",
  "Online",
];

const courses = {
  thisFall: [
    "To be determined...",
  ],
  computerScience: [
    "CSCI 1951A Data Science",
    "CSCI 0330 Introduction to Computer Systems",
    "CSCI 0320 Introduction to Software Engineering",
    "CSCI 0160 Introduction to Algorithms and Data Structures",
    "CSCI 0150 Introduction to Object-Oriented Programming and Computer Science",
  ],
  mathematics: [
    "APMA 1650 Statistical Inference",
    "APMA 0340 Partial Differential Equations",
    "APMA 0330 Ordinary Differential Equations",
    "MATH 0520 Linear Algebra",
    "MATH 0350 Honors Calculus",
  ],
  other: [
    "CLPS 0200 Human Cognition",
    "ECON 1710 Investments",
    "ECON 1130 Intermediate Microeconomics (Mathematical)",
    "ECON 0110 Principles of Economics",
    "ENGN 0520 Electricity & Magnetism",
    "ENGN 0120A Crossing the Consumer Cham by Design",
    "ENGN 0040 Dynamics and Vibrations",
    "ENGN 0031 Honors Introduction to Engineering",
  ],
  online: [
    "Machine Learning by Stanford University",
    "Machine Learning Crash Course by Google",
    "The Web Developer Bootcamp by Colt Steele",
  ],
};

function Courses() {
  const [pills, setPills] = React.useState(0);
  return (
    <>
      <div className="section" id="courses">
        <Container>
          <h2 className="title">Courses</h2>
          <p>GPA: 4.0/4.0</p>
          <div>
            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-around"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      {titles.map((title, i) => (
                        <NavItem key={i}>
                          <NavLink
                            className={pills === i ? "active" : ""}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setPills(i);
                            }}
                          >
                            {title}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent activeTab={"pills" + pills}>
                      <TabPane tabId="pills0">
                        <ul>
                          {courses.thisFall.map((course, i) => (
                            <li key={i}>{course}</li>
                          ))}
                        </ul>
                      </TabPane>
                      <TabPane tabId="pills1">
                        <ul>
                          {courses.computerScience.map((course, i) => (
                            <li key={i}>{course}</li>
                            ))}
                        </ul>
                      </TabPane>
                      <TabPane tabId="pills2">
                        <ul>
                          {courses.mathematics.map((course, i) => (
                            <li key={i}>{course}</li>
                            ))}
                        </ul>
                      </TabPane>
                      <TabPane tabId="pills3">
                        <ul>
                          {courses.other.map((course, i) => (
                            <li key={i}>{course}</li>
                            ))}
                        </ul>
                      </TabPane>
                      <TabPane tabId="pills4">
                        <ul>
                          {courses.online.map((course, i) => (
                            <li key={i}>{course}</li>
                            ))}
                        </ul>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Courses;
