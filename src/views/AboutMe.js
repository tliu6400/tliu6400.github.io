import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function AboutMe() {
  return (
    <>
      <div className="section" id="about-me">
        <Container>
          <h2 className="title">About Me</h2>
          <div>
            <Row>
              <Col sm="3" style={{paddingBottom: "24px"}}>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/tom.jpg")}
                ></img>
              </Col>
              <Col md="9">
                <p>
                  Hi! My name is{" "}
                  <span style={{ fontWeight: "bolder" }}>Tom Liu</span>. I'm a
                  rising junior (expected May 2022) at Brown University studying{" "}
                  <span style={{ fontWeight: "bolder" }}>
                    Applied Mathematics and Computer Science
                  </span>
                  . I'm passionate about the fields of{" "}
                  <span style={{ fontWeight: "bolder" }}>
                    artificial intelligence and data science
                  </span>
                  , and outside of my concentration, I'm also interested in the
                  areas of Engineering, Physics, Economics, and more.
                  <br></br>
                  <br></br>
                  Before Brown, I attended the Webb School of California, and I
                  have previously lived in Los Angeles, Beijing, Shenzhen, and
                  San Diego. In my free time, I enjoy running, hiking, playing
                  tennis, and more. Explore my page to learn more about me!
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutMe;
