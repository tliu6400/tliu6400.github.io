import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import CardWrapper from "./CardWrapper.js";

const experience = [
  {
    name: "Qualcomm",
    title: "Software Engineering Intern",
    timeframe: "June 2020-Present",
    content:
      "Currently interning at Qualcomm’s 5G Automation Development team as a software engineer.",
    skills: ["Python", "JavaScript", "AngularJS"],
    image: require("../assets/img/qualcomm.png"),
  },
  {
    name: "Cabana Health",
    title: "Co-Founder, Product Constructor",
    timeframe: "March 2020-Present",
    content:
      "Technical co-founder and product constructor for Cabana Health, a health and wellness mobile app that allows users to centralize their health information and create goal-centered communities. To learn more about Cabana Health, visit our https://cabana.health. Cabana Health is one of ventures participating in Babson University's Summer Catalyst accelerator.",
    skills: ["Swift (SwiftUI)", "Firebase"],
    image: require("../assets/img/cabana.jpg"),
  },
  {
    name: "Brown University CS Department",
    title: "Teaching Assistant",
    timeframe: "May 2019-December 2019",
    content:
      "Member of the teaching assistant staff for Professor Andy van Dam’s introductory computer science course. As a member of this staff, I worked alongside 50 undergraduate teaching assistants to help instruct a class of nearly 400 students. Throughout the semester, my general responsibilities included leading three hours of group design sections and labs per week, holding four hours of individual office hours for code debugging and conceptual help per week, grading student projects, and more. As one of the course’s video teaching assistants, I was also responsible for filming and editing the course’s skits.",
    skills: ["Java"],
    image: require("../assets/img/brown.png"),
  },
  {
    name: "Flex",
    title: "Manufacturing Engineering Intern",
    timeframe: "May 2019-July 2019",
    content:
      "Engineering intern at one of Flex’s factories in Guadalajara, Mexico. I worked closely with the factory for PCBs to increase efficiency of the production lines. Production line for PCBs consisted of many stages: 1) applying solder, 2) heating solder, 3) placing components, and 4) inspecting placements. These boards can easily have over 10,000 components each; often pieces are placed poorly or missed entirely. My job was to create a real time monitoring system to identify the components of the boards that were having the most failures, helping production engineers optimize their time by focusing on the components that are failing more often than others.",
    skills: ["SQL", "Power BI"],
    image: require("../assets/img/flex.jpg"),
  },
];

function Experience() {
  return (
    <>
      <div className="section" id="experience">
        <Container>
          <h2 className="title">Experience</h2>
          <div>
            <Row className="justify-content-around">
              {experience.map((experience, i) => (
                <Col key={i} md="6">
                  <CardWrapper content={experience}></CardWrapper>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Experience;
